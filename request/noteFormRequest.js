const yup = require('yup');

module.exports = yup.object({
  body: yup.object({
    // email: yup.string().required().email(),
    content: yup.string().trim().required(),
    title: yup.string().trim().required()
  }),
  params: yup.object({
    id: yup.number(),
  }),

});



