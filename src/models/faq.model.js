import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    translations: {
      questions: {
        type: Map,
        of: String,
        required: true,
      },
      answers: {
        type: Map,
        of: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

FAQSchema.methods.getTranslatedText = function (lang) {
  return {
    question: this.translations.questions.get(lang) || this.question,
    answer: this.translations.answers.get(lang) || this.answer,
  };
};

const FAQ = mongoose.model("FAQ", FAQSchema);
export default FAQ;
