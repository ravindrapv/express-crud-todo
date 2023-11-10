const yup = require("yup");

const validation = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    }
  };
};

module.exports = validation;
