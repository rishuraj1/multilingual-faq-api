const createFAQValidation = (req, res, next) => {
  const { question, answer } = req.body;
  if (!question || !answer) {
    return res.status(400).send("Question and Answer are required");
  }
  next();
};

export { createFAQValidation };
