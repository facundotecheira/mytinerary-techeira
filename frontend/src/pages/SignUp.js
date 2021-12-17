import React from 'react'
import { connect } from 'react-redux';
import userAction from '../redux/actions/userAction'
import SignUpIn from '../components/SignUp-In'
import Nav from '../components/Nav';
import { Navigate } from 'react-router-dom';
import toasty from "../components/Toast"
class SignUP extends React.Component {

    constructor(props) {
        super(props)
    }



    navigate = this.props.location.pathname



    render() {

        const token = localStorage.getItem('token');

        if (token) {
            return <Navigate to='/' />
        }

        const handleSubmit = async (firstName, lastName, email, password, url, country) => {
            const errores = await this.props.registerUser(firstName, lastName, email, password, url, country)
            console.log(errores)
            if (errores.errores) {
                errores.errores.map((e) => {
                    if (e.message == 'The user already exists') {
                        toasty('error', e.message)
                    } else {

                        e.message.length > 6 ? toasty('success', e.message) : toasty('error', e.message.join('\n'))
                    }

                })
            }

        }

       


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
    registerUser: userAction.registrarUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUP)