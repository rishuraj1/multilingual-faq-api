import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import faqRoutes from "./routes/faq.routes.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "editor")));

const PORT = process.env.PORT || 5000;


app.use("/api/faqs", faqRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "editor", "index.html"));
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
