import express from "express";
import {
  createFAQ,
  deleteFAQ,
  getFAQs,
  updateFAQ,
} from "../controllers/faq.controller.js";
import { cacheMiddleware } from "../middlewares/cacheMiddleware.js";
import {
  createFAQValidation,
  deleteFAQValidation,
  updateFAQValidation,
} from "../middlewares/validations.js";

const router = express.Router();

router.post("/", createFAQValidation, createFAQ);
router.get("/", cacheMiddleware, getFAQs);
router.put("/", updateFAQValidation, updateFAQ);
router.delete("/:id", deleteFAQValidation, deleteFAQ);

export default router;
