import FAQ from "../models/faq.model";
import languages from "../utils/languages";
import translateText from "./translateService";

const getFAQService = async (lang = "en") => {
  const faqs = await FAQ.find();
  return faqs.map((faq) => faq.getTranslatedText(lang));
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

export { getFAQService, createFAQService };
