/**
 * Simple Express server scaffold (JavaScript)
 *
 * Backend developer notes (important):
 * - Endpoint: POST /api/contact
 *    Expects: JSON { name, email, subject, message }
 *    Recommended steps in implementation:
 *      1. Validate and sanitize inputs (check email format, length).
 *      2. Rate-limit this endpoint (e.g., express-rate-limit) to prevent spam.
 *      3. Use reCAPTCHA or other anti-spam measures for production.
 *      4. Persist to a database (Postgres/Mongo) and optionally send confirmation email to user.
 *      5. Send internal notification to support via Email/SMS/Slack.
 * - Replace the placeholder console.log with actual DB/mailer logic below.
 */

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // TODO: Insert validation, DB saving and mailer integration here
  console.log("Contact received:", { name, email, subject, message });

  // Simulate async save
  setTimeout(() => {
    return res.status(200).json({ ok: true });
  }, 300);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
