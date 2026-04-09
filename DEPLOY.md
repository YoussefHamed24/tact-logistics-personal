# Tact Freight Website — Deployment Guide

## Overview

- **Hosting:** Cloudflare Pages (free tier)
- **Form backend:** Cloudflare Workers (built into Pages via the `functions/` folder)
- **Data storage:** Google Sheets (two sheets: Quotes, Careers)
- **Build:** Vite + React, auto-built by Cloudflare on every GitHub push

---

## Step 1 — Push to GitHub

Make sure your repo is pushed to GitHub. The branch you deploy from
(usually `main`) is what Cloudflare will watch.

```bash
git add .
git commit -m "Remove Base44 dependencies, add Careers page"
git push origin main
```

---

## Step 2 — Create the Google Sheet

1. Go to https://sheets.google.com and create a new spreadsheet
   named **Tact Freight — Submissions**
2. Create two sheets (tabs at the bottom):
   - **Quotes** — add these headers in row 1:
     `Timestamp | Full Name | Email | Phone | Company | Service | Origin | Destination | Cargo | Message | Status`
   - **Careers** — add these headers in row 1:
     `Timestamp | Full Name | Email | Phone | Position | Experience | LinkedIn | Cover Letter | Status`
3. Copy the **Spreadsheet ID** from the URL:
   `https://docs.google.com/spreadsheets/d/` **`THIS_PART`** `/edit`

---

## Step 3 — Create a Google Service Account

This gives the Cloudflare Worker permission to write to your sheet.

1. Go to https://console.cloud.google.com
2. Create a new project called "Tact Freight Website"
3. Go to **APIs & Services → Enable APIs** → search for
   **Google Sheets API** → Enable it
4. Go to **APIs & Services → Credentials**
5. Click **Create Credentials → Service Account**
   - Name: `tact-freight-sheets`
   - Click Create and Continue → Done
6. Click the service account email you just created
7. Go to the **Keys** tab → **Add Key → Create new key → JSON**
8. A `.json` file downloads — open it, you need two values:
   - `client_email` → this is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → this is your `GOOGLE_PRIVATE_KEY` (the long string starting with `-----BEGIN PRIVATE KEY-----`)

9. **Share the Google Sheet with the service account:**
   - Open your Sheet → Share → paste the `client_email` → Editor role → Share

---

## Step 4 — Deploy on Cloudflare Pages

1. Go to https://pages.cloudflare.com
2. Click **Create a project → Connect to Git**
3. Select your GitHub repo
4. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy** — first deploy will succeed for the static site

---

## Step 5 — Add Environment Variables

After the first deploy, go to your project **Settings → Environment Variables**
and add these three (for **Production** environment):

| Variable | Value |
|---|---|
| `GOOGLE_SHEET_ID` | The spreadsheet ID from Step 2 |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | The `client_email` from the JSON key |
| `GOOGLE_PRIVATE_KEY` | The full `private_key` value, including the `-----BEGIN...` lines |

> **Important for GOOGLE_PRIVATE_KEY:** Paste the value exactly as it appears
> in the JSON file. Cloudflare will preserve the newlines correctly.

Click **Save** then go to **Deployments → Retry deployment** (so the
Worker picks up the new env vars).

---

## Step 6 — Connect your domain

1. In Cloudflare Pages, go to **Custom domains → Add a custom domain**
2. Enter `tactfreight.com` (and optionally `www.tactfreight.com`)
3. Cloudflare will show you DNS records to add
4. Since you likely already have your domain on Cloudflare DNS, it will
   offer to add the records automatically — click **Activate domain**
5. SSL is provisioned automatically within a few minutes

---

## Step 7 — Set up email alerts for new submissions (optional but recommended)

In Google Sheets:
1. Go to **Tools → Notification rules**
2. Set: "Notify me when → Any changes are made → Email - right away"
3. This sends an email every time a form submission lands in the sheet

---

## Environment Variables Summary

```
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=tact-freight-sheets@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n
```

---

## How form submissions flow

```
User fills form on site
       ↓
POST /api/submit-quote  (or /api/submit-career)
       ↓
Cloudflare Worker (functions/api/submit-quote.js)
       ↓
Signs a JWT with the service account private key
       ↓
Exchanges JWT for a Google OAuth2 access token
       ↓
Appends a row to the correct sheet tab
       ↓
Returns { success: true } → site shows confirmation
```

---

## Local development

```bash
npm install
npm run dev
```

Forms won't work locally (Worker only runs on Cloudflare), but the
rest of the site works fine. To test Workers locally:
```bash
npm install -g wrangler
wrangler pages dev dist
```

