const yup = require('yup');

module.exports.registrayionUserSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isSubscribed: yup.boolean().required()
})