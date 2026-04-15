import cors from "cors";
import express from "express";
import mailRoutes from "./routes/mailRoutes.js";
import { isMailConfigured, smtpHost, smtpPort, smtpUser } from "./config/mailConfig.js";

const app = express();

const corsOriginRaw = process.env.CORS_ORIGIN || "";
const corsOrigins = corsOriginRaw
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({ origin: corsOrigins.length ? corsOrigins : true }));
app.use(express.json({ limit: "12mb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api", mailRoutes);

app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err?.message, err);
  res.status(500).json({ ok: false, error: "Internal Server Error" });
});

const port = Number(process.env.PORT || 3001);
console.log("Mail server config:", {
  host: smtpHost,
  port: smtpPort,
  user: smtpUser || "(missing)",
  configured: isMailConfigured
});

app.listen(port, () => {
  console.log(`Mail server listening on http://localhost:${port}`);
});
