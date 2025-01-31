import FAQ from "../models/faq.model.js"
import redisClient from "../config/redis.js";
import translate from "google-translate-api";

const getFAQs = async (req, res) => {
    try{
        const lang = req.query.lang || "en";
        const faqs = await FAQ.find().lean();

        faqs.forEach(faq => {
            faq.question = faq.
        })

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}