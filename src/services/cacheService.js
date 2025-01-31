import redisClient from "../config/redis.js";

const setCache = async (key, value) => {
  await redisClient.set(key, JSON.stringify(value), "EX", 3600, (err) => {
    if (err) {
      console.error("Redis SET error:", err);
      return;
    }
    console.log("FAQ data cached successfully");
  });
};

const removeCache = async () => {
  await redisClient.flushall();
};

export { setCache, removeCache };
