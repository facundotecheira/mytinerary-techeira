import React from 'react'
import SignUpIn from '../components/SignUp-In'
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import userAction from '../redux/actions/userAction'
import { Navigate } from 'react-router-dom';
import toasty from "../components/Toast"

class SignIn extends React.Component {

    constructor(props) {
        super(props)
    }

    // param = this.props.params.param
    navigate = this.props.location.pathname

    render() {

        const nombre = localStorage.getItem('firstName');

        if (nombre) {
            return <Navigate to='/' />
        }


        const handleSubmit = async (email, password) => {
            const errores = await this.props.iniciarSesion(email, password)
        
            if (errores.errores) {
                errores.errores.map((e) => {
                      
                           toasty('error',e.message ) 
                       
                    
                })
            }
        }
        // alert(e.message) 
        return (
            <>
                <Nav />
                <SignUpIn handleSubmit={handleSubmit} param={this.navigate} />

            </>
        )
    }

}



const mapStateToProps = (state) => {
    return {

        usuario: state.user.usuario
    }
}
const mapDispatchToProps = {
    iniciarSesion: userAction.iniciarSesion
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)