import redisClient from "../config/redis.js";

const cacheMiddleware = async (req, res, next) => {
  const lang = req.query.lang || "en";
  const cachedData = await redisClient.get(`faq_${lang}`);
  if (cachedData) {
    console.log("Cache hit");
    return res.status(200).json(JSON.parse(cachedData));
  }
  console.log("Cache miss");
  next();
};

export { cacheMiddleware };
