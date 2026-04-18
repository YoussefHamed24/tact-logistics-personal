import {
  appendRowToSheet,
  corsHeaders,
  getAccessToken,
  getRowIndexFromAppendResponse,
  getSheetId,
  setRowBold,
} from "./_lib/googleSheets.js";

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const token = await getAccessToken(env);
    const sheetId = await getSheetId(env, token, "Contacts");
    const now = new Date().toLocaleString("en-EG", { timeZone: "Africa/Cairo" });

    const row = [
      now,
      body.full_name,
      body.email,
      body.phone,
      body.company,
      body.message,
      "New",
    ];

    const res = await appendRowToSheet(env, token, "Contacts", row);

    if (!res.ok) {
      const err = await res.text();
      return new Response(JSON.stringify({ error: err }), { status: 500, headers: corsHeaders() });
    }

    const appendResult = await res.json();
    const rowIndex = getRowIndexFromAppendResponse(appendResult);

    if (rowIndex !== null && sheetId !== null) {
      await setRowBold(env, token, sheetId, rowIndex, row.length, false);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: corsHeaders() });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders() });
  }
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}
