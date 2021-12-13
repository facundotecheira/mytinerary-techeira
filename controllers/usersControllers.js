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
        
        let { firstName,lastName,email,password,url,country,google } = req.body      
        // tengo que hashear (hash) la contraseña y guardarla en la base de datos
        // console.log(req.body)
        try {

            const usuarioExiste = await Usersmodel.findOne({email})
            if (usuarioExiste){
                return res.json({success: false, error:"El usuario ya existe"})
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
        const { email, password,google } = req.body
        if (email == '' || password == ''){
            return res.json({success: true, error:"Los campos no pueden quedar vacios"})
        }
        console.log(req.body)
        try {
            const usuarioExiste = await Usersmodel.findOne({email})
            if (usuarioExiste.google && !google){
                res.json({success: true, error:"Invalid email"})
            }
            if (!usuarioExiste){
                res.json({success: true, error:"El correo no existe"})
            }else{
                let contraseñaCoincide = bcryptjs.compareSync(password, usuarioExiste.password)
                if (contraseñaCoincide) {
                    const token = jwt.sign({...usuarioExiste}, process.env.SECRETKEY)
                    res.json({success: true, response: {token,...usuarioExiste} ,error:null})
                    // res.json({success: true, error:"te has logeado correctamente"})
                }else{
                    res.json({success: true, error:"La contraseña es incorrecta"})
                }
            }

        }catch(error){
            console.log(error);
            res.json({success: false, response: null, error: error})
        }
    }


}

module.exports = userControllers;