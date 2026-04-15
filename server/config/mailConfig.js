import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const serverRoot = path.resolve(__dirname, "..");
export const projectRoot = path.resolve(serverRoot, "..");

dotenv.config({ path: path.join(serverRoot, ".env") });

export const smtpUser = process.env.SMTP_USER || "";
export const smtpPass = process.env.SMTP_PASS || "";
export const mailTo =
  process.env.MAIL_TO ||
  smtpUser ||
  "careerhubtechnologypimpri@gmail.com";

export const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
export const smtpPort = Number(process.env.SMTP_PORT || 465);
export const smtpSecure =
  String(process.env.SMTP_SECURE || "true").toLowerCase() === "true";

export const isMailConfigured = Boolean(smtpUser && smtpPass);

export const transporter = isMailConfigured
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass }
    })
  : null;

export function mailConfigStatus() {
  if (isMailConfigured) return { ok: true };
  return { ok: false, error: "SMTP credentials missing (SMTP_USER/SMTP_PASS)" };
}
