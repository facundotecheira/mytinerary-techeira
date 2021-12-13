const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({

        firstName: joi.string().max(12).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.max':'the first name exceeds 12 characters',
            'string.min':'the first name must contain at least 3 characters',
            'string.empty':'the first name must not be empty'
        }),
        lastName: joi.string().max(24).min(4).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.max':'the last name exceeds 24 characters',
            'string.min':'the last name must contain at least 4 characters',
            'string.empty':'the last name must not be empty'
        }),
        email: joi.string().trim().email(new RegExp('/^([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/')).required().messages({
            'string.email': 'the email is not valid',
            'string.empty':'the email must not be empty'
        }),

        password: joi.string().trim().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages({
            'string.pattern.base':'the password must contain only numbers or letters',
            'string.empty':'the password must not be empty'
        }),
        url: joi.string().required().messages({'string.empty':'the url cannot be empty'}),

        country: joi.string().required().messages({'string.empty':'the country cannot be empty '}),

        google: joi.boolean(),

        
    
    })

    const validation = schema.validate(req.body, {abortEarly:false})

    if (validation.error) {
        return res.json({success: false, error: (validation.error.details.map((el)=>{
            return el.message 
        }))})
        
    }
    

    next()
     
    
}

module.exports = validator