const axios = require('axios');

const userAction = {
    
    registrarUsuario: (firstName, lastName, email, password, url, country, google) => {
        return async (dispatch, getState) => {
            try {
                
                const user = await axios.post('http://localhost:4000/api/auth/signUp', { firstName, lastName, email, password, url, country, google })
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'USER', payload: user.data.response._doc })
                    return { errores: [{ message: 'User successfully registered' }] }
                } else {
                    return { errores: [{ message: user.data.error }] }
                }
            } catch (error) {

            }
        }
    },
    iniciarSesion: (email, password) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/auth/signIn', { email, password })
                if (user.data.success && !user.data.error) {
                    localStorage.setItem('token', user.data.response.token)
                    dispatch({ type: 'USER', payload: user.data.response._doc })
                    return { errores: [] }
                } else {
                    
                    return { errores: [{ message: user.data.error }] }
                }
            } catch (error) {
                console.error(error)
            }
        }
    },
    cerrarSesion: () => {
        return (dispatch, getState) => {
            dispatch({ type: "LOG_OUT_USER" })
        }
    },
    signInLS: (token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get('http://localhost:4000/api/verifyToken', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                })
                
                dispatch({ type: 'USER', payload: response.data})
                
            } catch (error) {
                return dispatch({ type: 'LOG_OUT_USER' })
            }
        }
    }
}

module.exports = userAction