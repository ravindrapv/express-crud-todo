const yup = require("yup");

// Yup schema for POST request
const postUserSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  done: yup.boolean().required("Done field is required"),
});

// Yup schema for PUT request
const putUserSchema = yup.object().shape({
  title: yup.string(),
  description: yup.string(),
  done: yup.boolean(),
});

module.exports = {
  postUserSchema,
  putUserSchema,
};
