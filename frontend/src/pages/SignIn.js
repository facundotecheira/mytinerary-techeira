import React from 'react'
import SignUpIn from '../components/SignUp-In'
import Nav from '../components/Nav';
import {connect} from 'react-redux';
import userAction from '../redux/actions/userAction'
import { Navigate } from 'react-router-dom';

class SignIn extends React.Component {

    constructor(props) {
        super(props)
    }

    param = this.props.params.param

    render() {

        if (this.props.usuario._id) {
            return <Navigate to = '/'/>
        }


        const handleSubmit = async (email,password)=>{
             this.props.iniciarSesion(email,password)
        }

        return (
            <>
                <Nav />
                <SignUpIn handleSubmit={handleSubmit} param={this.param} />
               
            </>
        )
    }

}



const mapStateToProps = (state) =>{
    return {

        usuario: state.user.usuario
    }
 }
 const mapDispatchToProps = {
    iniciarSesion: userAction.iniciarSesion
 }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)