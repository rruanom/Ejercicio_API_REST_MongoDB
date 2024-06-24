const { body, param, query } = require("express-validator");

const validateCreateProvider = [
  body("name")
      .exists().withMessage("Provider name is required")
      .isString().withMessage("Name should be string"),
  body("surname")
      .exists().withMessage("Provider surname is required")
      .isString().withMessage("Surname should be string"),
  body("email")
      .exists().withMessage("Provider email is required")
      .isEmail().withMessage("Valid email is required"),
  body("image")
      .exists().withMessage("Provider image is required")
      .isString().withMessage("Valid email is required"),
];

const validateDeleteProvider = [
  query('email').notEmpty().withMessage("Valid email is required")
];

const validateGetProvider = [
    query('email').notEmpty().isEmail().withMessage("Email should exist to get an Provider")
];

const validateUpdateProvider = [
  body("name")
      .exists().withMessage("Provider name is required")
      .isString().withMessage("Name should be string"),
  body("surname")
      .exists().withMessage("Provider surname is required")
      .isString().withMessage("Surname should be string"),
  body("email")
      .exists().withMessage("Provider email is required")
      .isEmail().withMessage("Valid email is required"),
  body("image")
      .exists().withMessage("Provider image is required")
      .isString().withMessage("Provider image is required"),
  body("old_email")
      .exists().withMessage("Provider ref_email is required")
      .isEmail().withMessage("Valid ref_email is required"),
]

module.exports = {
    validateCreateProvider,
    validateDeleteProvider,
    validateGetProvider,
    validateUpdateProvider
};







