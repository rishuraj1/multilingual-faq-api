import { setCache, removeCache } from "../services/cacheService.js";
import { createFAQService, deleteFAQService, getFAQService, updateFAQService } from "../services/faq.services.js";

const createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    await createFAQService(question, answer);
    await removeCache();
    return res.status(201).json({
      message: "FAQ created successfully",
      data: null,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getFAQs = async (req, res) => {
  try {
    const { lang = "en" } = req.query;
    const faqs = await getFAQService(lang);
    await setCache(`faq_${lang}`, faqs);
    return res.status(200).json({
      message: "FAQs fetched successfully",
      data: faqs,
    });
  } catch (error) {
    console.warn(error);
    res.status(400).json({ error, message: "Failed to fetch FAQs" });
  }
};

const updateFAQ = async (req, res) => {
  try {
    const { id, question, answer } = req.body;
    await updateFAQService(id, question, answer);
    await removeCache();
    return res.status(200).json({
      message: "FAQ updated successfully",
      data: null,
    });
  } catch (error) {
    res.status(400).send(error);
  }
}

const deleteFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteFAQService(id)
    await removeCache()
    return res.status(204).json({
      message: "FAQ deleted successfully",
      data: null
    })
  } catch (error) {
    console.warn(error)
    res.status(400).send(error)
  }
}

export { createFAQ, getFAQs, updateFAQ, deleteFAQ };
