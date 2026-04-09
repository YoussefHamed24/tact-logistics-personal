export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const result = await appendToSheet(body, env, "Quotes");
    if (!result.ok) {
      return new Response(JSON.stringify({ error: "Sheet write failed" }), { status: 500, headers: corsHeaders() });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: corsHeaders() });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() });
  }
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

async function appendToSheet(data, env, sheetName) {
  const token = await getAccessToken(env);
  const spreadsheetId = env.GOOGLE_SHEET_ID;

  const now = new Date().toLocaleString("en-EG", { timeZone: "Africa/Cairo" });

  const row = sheetName === "Quotes"
    ? [now, data.full_name, data.email, data.phone, data.company, data.service_type, data.origin, data.destination, data.cargo_description, data.message, "New"]
    : [now, data.full_name, data.email, data.phone, data.message, "New"];

  return fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [row] }),
    }
  );
}

async function getAccessToken(env) {
  const jwt = await makeJWT(env);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const data = await res.json();
  return data.access_token;
}

async function makeJWT(env) {
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const enc = (obj) => btoa(JSON.stringify(obj)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const signingInput = `${enc(header)}.${enc(payload)}`;

  // Parse the private key from env
  const privateKeyPem = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
  const pemContents = privateKeyPem.replace(/-----BEGIN PRIVATE KEY-----/, "").replace(/-----END PRIVATE KEY-----/, "").replace(/\s/g, "");
  const binaryDer = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8", binaryDer.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false, ["sign"]
  );

  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", cryptoKey, new TextEncoder().encode(signingInput));
  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  return `${signingInput}.${sigB64}`;
}

function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
