import { appendRowToSheet, corsHeaders, getAccessToken } from "./_lib/googleSheets.js";

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const token = await getAccessToken(env);
    const now = new Date().toLocaleString("en-EG", { timeZone: "Africa/Cairo" });
    const row = [
      now,
      body.full_name,
      body.email,
      body.phone,
      body.company,
      body.service_type,
      body.origin,
      body.destination,
      body.cargo_description,
      body.message,
      "New",
    ];
    const result = await appendRowToSheet(env, token, "Quotes", row);
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
