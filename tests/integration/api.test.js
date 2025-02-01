import request from "supertest";
import app from "../src/app.js";

describe("API Integration Tests", () => {
  it("should return 404 for invalid endpoints", async () => {
    const res = await request(app).get("/api/nonexistent");
    expect(res.statusCode).toEqual(404);
  });

  it("should handle errors gracefully", async () => {
    const res = await request(app)
      .post("/api/faqs")
      .send({ question: "", answer: "" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });
});
