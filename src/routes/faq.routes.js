import express from "express";
import { createFAQ, getFAQs } from "../controllers/faq.controller.js";
import { cacheMiddleware } from "../middlewares/cacheMiddleware.js";
import { createFAQValidation } from "../middlewares/validations.js";

const router = express.Router();

router.post("/", createFAQValidation(), createFAQ);
router.get("/", cacheMiddleware(), getFAQs);
    
export default router;
