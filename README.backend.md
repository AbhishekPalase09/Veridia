# README.backend.md

This file contains concise notes for the backend developer integrating with the Veridia landing frontend.

## Quick start
1. Copy `.env.example` to `.env` and fill the values.
2. `npm install` (or `pnpm` / `yarn`)
3. `npm run server` (or check package.json script named "server")

## Required environment variables
- `PORT` - port server will listen on (default 5000)
- `NODE_ENV` - development|production
- `JWT_SECRET` - secret used for token signing (if using auth)
- `DB_URI` - (optional) database connection string (MongoDB/Postgres)
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` - for contact form emails

## Routes to implement (frontend expects)
- `POST /api/contact`
  - Body: `{ name, email, message }`
  - Success: `200 { ok: true }` or `201` with created resource
  - Errors: `400` for validation, `500` for server error
  - Notes: frontend will show success toast when 2xx returned

- `POST /api/waitlist`
  - Body: `{ email }`
  - Returns: `{ ok: true, invited: false }` or created resource
  - Notes: validate duplicates, respond quickly (200/201). Consider queue-based email verification.

## File structure recommendations
- `server.js` or `app.js` - entry point. Configure express, bodyParser, routes, error handler.
- `routes/contact.js` - route definitions with express router.
- `controllers/contactController.js` - logic for handling incoming contact/waitlist requests.
- `utils/email.js` - smtp email helper (nodemailer).
- `models/` - Mongoose or ORM models for contact/waitlist.
- `middleware/` - auth, validation, rate-limiting (for public endpoints).

## Examples & samples
### Example contact route (express)
```js
/**
 * POST /api/contact
 * body: { name, email, message }
 */
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!email || !message) return res.status(400).json({ error: "Missing fields" });

  // TODO: store to DB, send notification email, rate-limit
  return res.status(200).json({ ok: true });
});
