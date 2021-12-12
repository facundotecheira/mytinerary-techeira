const axios = require('axios');

const userAction = {

    registrarUsuario: (firstName,lastName,email,password,url,country) =>{
        return async(dispatch, getState)=>{
            try {
                
                const user = await axios.post('http://localhost:4000/api/auth/signUp' ,{firstName,lastName,email,password,url,country})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'USER', payload: user.data.response._doc})
                     return {errores: [{message: 'Usuario registrado correctamente'}]}
                }else{
                    
                    // console.log(user.data.response)
                    return {errores: [{message: user.data.error}]}
                }
            }catch(error){
                
            }
        }
    },
    iniciarSesion: (email,password) => {
        return async(dispatch, getState)=>{
            try {
                const user = await axios.post('http://localhost:4000/api/auth/signIn',{email, password})
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'USER', payload: user.data.response._doc})
                    return {errores: []}
                }else{
                    console.log('toy aca',user.data)
                    return {errores: [{message: user.data.error}]}
                    
                    
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    cerrarSesion : () => {
        return(dispatch, getState) => {
            dispatch({type:"LOG_OUT_USER"})
        }
    }
}

module.exports = userAction