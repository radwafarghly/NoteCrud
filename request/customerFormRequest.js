const yup = require('yup');

module.exports = yup.object({
  body: yup.object({
    // email: yup.string().required().email(),
    email: yup.string().trim().required().email(),
    name: yup.string().trim().required()
  }),
  params: yup.object({
    id: yup.number(),
  }),

});



