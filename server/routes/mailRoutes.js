import express from "express";
import {
  submitContact,
  submitFranchise,
  submitJobPlacement,
  verifyMail
} from "../controllers/mailController.js";

const router = express.Router();

router.get("/verify", verifyMail);
router.post("/contact", submitContact);
router.post("/franchise", submitFranchise);
router.post("/job-placement", submitJobPlacement);

export default router;
