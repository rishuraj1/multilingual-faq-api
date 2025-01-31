import FAQ from "../models/faq.model.js";
import languages from "../utils/languages.js";
import translateText from "./translateService.js";

const getFAQService = async (lang = "en") => {
  const faqs = await FAQ.find();
  const translatedFAQs = faqs.map((faq) => {
    const { question, answer } = faq.getTranslatedText(lang);
    return {
      _id: faq._id,
      question,
      answer,
      createdAt: faq.createdAt,
      updatedAt: faq.updatedAt,
    };
  });
  return translatedFAQs;
};

const createFAQService = async (question, answer) => {
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
  return faq;
};

const updateFAQService = async (id, question, answer) => {
  const faq = await FAQ.findById(id);
  if (!faq) {
    throw new Error("FAQ not found");
  }
  const translations = {
    questions: new Map(),
    answers: new Map(),
  };
  for (const lang of languages) {
    translations.questions.set(lang, await translateText(question, lang));
    translations.answers.set(lang, await translateText(answer, lang));
  }
  faq.question = question;
  faq.answer = answer;
  await faq.save();
  return faq;
};

const deleteFAQService = async (id) => {
  await FAQ.findByIdAndDelete(id);
};

export { getFAQService, createFAQService, updateFAQService, deleteFAQService };
