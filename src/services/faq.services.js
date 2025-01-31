import FAQ from "../models/faq.model";

const getFAQService = async (lang = "en") => {
  const faqs = await FAQ.find();
  return faqs.map((faq) => faq.getTranslatedText(lang));
};

export { getFAQService };