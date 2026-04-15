
  # Career Hub Technology Website

  This is a code bundle for Career Hub Technology Website. The original project is available at https://www.figma.com/design/gtNia2PNuBNdFNq35joDon/Career-Hub-Technology-Website.

  ## Project structure

  - `client/` - Vite + React frontend
  - `server/` - Express + Nodemailer backend (mail API)

  ## Setup

  Install dependencies:

  ```sh
  npm i
  ```

  (Or install per-package: `cd server && npm i` and `cd ../client && npm i`)

  Configure env:
  - Copy `server/.env.example` → `server/.env` and set `SMTP_USER` / `SMTP_PASS`.
  - Optional: copy `client/.env.example` → `client/.env` (controls the dev proxy target).

  ## Run (development)

  Option A (two terminals):
  - Terminal 1: `cd server && npm run dev`
  - Terminal 2: `cd client && npm run dev`

  Option B (single command from repo root):
  - `npm run dev`

  The frontend posts to `/api/*`. In development, the Vite dev server proxies `/api` to `VITE_PROXY_TARGET` (default `http://localhost:3001`).
  
