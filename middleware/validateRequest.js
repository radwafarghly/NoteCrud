const ApiError = require('../error/error-api');

function validateNote(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate({
        body:req.body,
        params: req.params,
      });
      // replace request body with validated schema object
      // so that default values are applied to the DTO
      // req.body = validatedBody;
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  };
}

module.exports = validateNote;