const {registrayionUserSchema} = require('../schemas/userSchema')

module.exports.validateUser = async (req,res,next)=>{
    try{
        const value = await registrayionUserSchema.validate(req.body);
        return next();
    } catch(error){
        next(error.message)
    }
}