

const userReducer = (state = {usuario:''} , action) => {

    switch(action.type){
        case 'USER':
             return {
                 ...state,
                 usuario: action.payload
             }
        case 'LOG_OUT_USER':
            localStorage.removeItem('token')
            localStorage.removeItem('firstName')
            localStorage.removeItem('url')
            return{
                usuario:null
            }  
         default:
             return state
     }

}


export default userReducer