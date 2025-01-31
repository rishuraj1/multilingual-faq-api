import redisClient from "../config/redis.js";
import FAQ from "../models/faq.model.js";
import { getFAQService } from "../services/faq.services.js";
import translateText from "../services/translateService.js";
import languages from "../utils/languages.js";

const createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) {
      return res.status(400).send("Question and Answer are required");
    }

    const translations = {
      questions: new Map(),
      answers: new Map(),
    };

    languages.forEach(async (lang) => {
      translations.questions.set(lang, await translateText(question, lang));
      translations.answers.set(lang, await translateText(answer, lang));
    });

    const faq = new FAQ({ question, answer, translations });
    await faq.save();

    return res.status(201).json(JSON.parse(JSON.stringify(faq)));
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
