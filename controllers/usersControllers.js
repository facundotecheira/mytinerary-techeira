const Usersmodel = require('../models/Usersmodel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {

    // + al momento de registrar usuarios en nuestra aplicación, 
    // + hay situaciones que tenemos tener en cuenta  
    // + cuales son estas situaciones a tener en cuenta ?

    // - 1) que no haya usuarios repetidos
    // - 2) seguridad de la contraseña
    // - 3) validacion de datos


    newUser: async(req, res) => {
        
        let { firstName,lastName,email,password,url,country, google } = req.body      
        // tengo que hashear (hash) la contraseña y guardarla en la base de datos
 
        try {
            console.log(req.body)
            const usuarioExiste = await Usersmodel.findOne({email})
            if (usuarioExiste){
                return res.json({success: false, error:"The user already exists"})
            }else{

                const contraseñaHasheada = bcryptjs.hashSync(password, 10)

                const nuevoUsuario = new Usersmodel({
                    firstName,
                    password:contraseñaHasheada,
                    lastName,
                    email,
                    url,
                    country,
                    google
                    
                })

                await nuevoUsuario.save()
                const token = jwt.sign({...nuevoUsuario}, process.env.SECRETKEY)
                return res.json({success: true, response: {token,...nuevoUsuario}, error: null})
                // return res.json({success: true, error:"te has registrado correctamente"})
                
            }
        
        }catch(error){
            console.log('estoy aca',process.env.SECRETKEY,error)
            res.json({success: false, response: null, error: error})
        }

        
    },

    userLoged: async(req, res)=>{
        const { email, password } = req.body
        if (email == '' || password == ''){
            return res.json({success: true, error:"Fields cannot be left empty"})
        }
        console.log(req.body)
        try {
            const usuarioExiste = await Usersmodel.findOne({email})
  
            if (!usuarioExiste){
                res.json({success: true, error:"Mail does not exist"})
            }else{
                let contraseñaCoincide = bcryptjs.compareSync(password, usuarioExiste.password)
                if (contraseñaCoincide) {
                    const token = jwt.sign({...usuarioExiste}, process.env.SECRETKEY)
                    res.json({success: true, response: {token,...usuarioExiste} ,error:null})
                   
                }else{
                    res.json({success: true, error:"The password is incorrect"})
                }
            }

        }catch(error){
            console.log(error);
            res.json({success: false, response: null, error: error})
        }
    },
    verifyToken : (req, res) => {
        res.json({firstName: req.user.firstName, url:req.user.url, _id:req.user._id})
    }


}

module.exports = userControllers;