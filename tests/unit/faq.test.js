import request from "supertest";
import app from "../src/app.js"; // Assuming the Express app is exported from here

describe("Multilingual FAQ API", () => {
  let faqId;

  it("should create a new FAQ", async () => {
    const res = await request(app).post("/api/faqs").send({
      question: "What is Node.js?",
      answer:
        "Node.js is a runtime environment for executing JavaScript on the server.",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    faqId = res.body._id;
  });

  it("should update an FAQ", async () => {
    const res = await request(app).put(`/api/faqs/`).send({
      question: "What is Node.js?",
      answer:
        "Node.js is a powerful runtime for building scalable server-side applications.",
      id: faqId,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      "answer",
      "Node.js is a powerful runtime for building scalable server-side applications."
    );
  });

  it("should delete an FAQ", async () => {
    const res = await request(app).delete(`/api/faqs/${faqId}`);
    expect(res.statusCode).toEqual(204);
  });

  it("should get all FAQs", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
