import Joi from "joi";
import mongoose from "mongoose";

const createFAQValidation = (req, res, next) => {
  const schema = Joi.object({
    question: Joi.string().required(),
    answer: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  next();
};

const updateFAQValidation = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string()
      .custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.message("Invalid FAQ ID format");
        }
        return value;
      })
      .required(),
    question: Joi.string().optional(),
    answer: Joi.string().optional(),
  }).min(2);
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

const deleteFAQValidation = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string()
      .custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.message("Invalid FAQ ID format");
        }
        return value;
      })
      .required(),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    console.log(error);
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

export { createFAQValidation, updateFAQValidation, deleteFAQValidation };
