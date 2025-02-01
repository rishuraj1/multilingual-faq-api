import Redis from "ioredis-mock";

jest.mock("ioredis", () => {
  return Redis;
});
