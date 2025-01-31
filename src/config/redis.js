import Redis from "ioredis";

const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

redisClient.on("connect", () => {
    console.log("Redis connection SUCCESS");
});

redisClient.on("error", (error) => {
    console.error(`Redis connection error: ${error.message}`);
    process.exit(1);
});

export default redisClient;