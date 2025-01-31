import redisClient from "../config/redis.js";
import { createFAQService, getFAQService } from "../services/faq.services.js";

const createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    await createFAQService(question, answer);
    return res.status(201).send("FAQ created successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};

const getFAQs = async (req, res) => {
  try {
    const { lang = "en" } = req.query;
    const faqs = await getFAQService(lang);
    await redisClient.set(`faq_${lang}`, JSON.stringify(faqs), {
      EX: 3600,
    });
    return res.status(200).json(JSON.parse(JSON.stringify(faqs)));
  } catch (error) {
    res.status(400).send(error);
  }
};

export { createFAQ, getFAQs };