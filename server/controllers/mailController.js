import { promises as fs } from "node:fs";
import path from "node:path";
import {
  isMailConfigured,
  mailConfigStatus,
  mailTo,
  projectRoot,
  smtpUser,
  transporter
} from "../config/mailConfig.js";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);

async function resolveOptionalAttachment() {
  const attachPath = process.env.ATTACH_PDF_PATH;
  if (!attachPath) return null;

  const absolutePath = path.isAbsolute(attachPath)
    ? attachPath
    : path.join(projectRoot, attachPath);

  try {
    await fs.access(absolutePath);
    return {
      filename: path.basename(absolutePath),
      path: absolutePath
    };
  } catch {
    console.warn(`ATTACH_PDF_PATH not found: ${absolutePath}`);
    return null;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function asTable(rows) {
  const trs = rows
    .filter(([_, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #e5e7eb;"><strong>${escapeHtml(
          k
        )}</strong></td><td style="padding:6px 10px;border:1px solid #e5e7eb;">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");
  return `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">${trs}</table>`;
}

function ensureMailConfigured(res) {
  if (isMailConfigured && transporter) return true;
  const status = mailConfigStatus();
  res.status(500).json({
    ok: false,
    error:
      status.error ||
      "Mail server is not configured. Set SMTP_USER and SMTP_PASS in server/.env."
  });
  return false;
}

export async function verifyMail(_req, res) {
  if (!ensureMailConfigured(res)) return;
  try {
    await transporter.verify();
    res.json({ ok: true, message: "Mail server connection verified" });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, error: err?.message || "Failed to verify mail server" });
  }
}

export async function submitContact(req, res) {
  if (!ensureMailConfigured(res)) return;
  try {
    const { name, phone, email, service, message } = req.body || {};
    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const attachment = await resolveOptionalAttachment();
    const info = await transporter.sendMail({
      from: smtpUser,
      to: mailTo,
      subject: `Contact Enquiry: ${name}`,
      html:
        `<p style="font-family:Arial,sans-serif;">New contact enquiry received:</p>` +
        asTable([
          ["Name", name],
          ["Phone", phone],
          ["Email", email],
          ["Service", service],
          ["Message", message]
        ]),
      attachments: attachment ? [attachment] : []
    });

    res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error("Error in /api/contact:", err?.message, err?.stack);
    res.status(500).json({ ok: false, error: err?.message || "Failed to send email" });
  }
}

export async function submitFranchise(req, res) {
  if (!ensureMailConfigured(res)) return;
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      city,
      state,
      investmentRange,
      experience,
      reason
    } = req.body || {};

    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobile ||
      !city ||
      !state ||
      !investmentRange ||
      !reason
    ) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const attachment = await resolveOptionalAttachment();
    const info = await transporter.sendMail({
      from: smtpUser,
      to: mailTo,
      subject: `Franchise Application: ${firstName} ${lastName}`,
      html:
        `<p style="font-family:Arial,sans-serif;">New franchise application received:</p>` +
        asTable([
          ["First Name", firstName],
          ["Last Name", lastName],
          ["Email", email],
          ["Mobile", mobile],
          ["City", city],
          ["State", state],
          ["Investment Range", investmentRange],
          ["Experience (optional)", experience],
          ["Reason", reason]
        ]),
      attachments: attachment ? [attachment] : []
    });

    res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error("Error in /api/franchise:", err?.message, err);
    res.status(500).json({ ok: false, error: err?.message || "Failed to send email" });
  }
}

export async function submitJobPlacement(req, res) {
  if (!ensureMailConfigured(res)) return;
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      education,
      message,
      resumeFileName,
      resumeContentType,
      resumeBase64
    } = req.body || {};

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !education ||
      !resumeFileName ||
      !resumeBase64
    ) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const ext = path.extname(resumeFileName).toLowerCase();
    if (!ALLOWED_RESUME_EXTENSIONS.has(ext)) {
      return res.status(400).json({ ok: false, error: "Unsupported resume file type" });
    }

    const normalizedBase64 = String(resumeBase64).replace(/\s+/g, "");
    const resumeBuffer = Buffer.from(normalizedBase64, "base64");
    if (!resumeBuffer.length) {
      return res.status(400).json({ ok: false, error: "Invalid resume file data" });
    }
    if (resumeBuffer.length > MAX_RESUME_BYTES) {
      return res
        .status(413)
        .json({ ok: false, error: "Resume file is too large (max 5 MB)" });
    }

    const optionalAttachment = await resolveOptionalAttachment();
    const attachments = [
      {
        filename: resumeFileName,
        content: resumeBuffer,
        contentType: resumeContentType || undefined
      },
      ...(optionalAttachment ? [optionalAttachment] : [])
    ];

    const info = await transporter.sendMail({
      from: smtpUser,
      to: mailTo,
      subject: `Job Placement Application: ${firstName} ${lastName}`,
      html:
        `<p style="font-family:Arial,sans-serif;">New job placement application received:</p>` +
        asTable([
          ["First Name", firstName],
          ["Last Name", lastName],
          ["Email", email],
          ["Phone", phone],
          ["Education", education],
          ["Message (optional)", message],
          ["Resume", resumeFileName]
        ]),
      attachments
    });

    res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error("Error in /api/job-placement:", err?.message, err);
    res.status(500).json({ ok: false, error: err?.message || "Failed to send email" });
  }
}
