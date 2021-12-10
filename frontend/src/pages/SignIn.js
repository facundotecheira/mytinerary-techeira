import React from 'react'
import SignUpIn from '../components/SignUp-In'
import Nav from '../components/Nav';

export default class SignIn extends React.Component {

    constructor(props) {
        super(props)
    }

    param = this.props.params.param

    render() {

        return (
            <>
                <Nav />
                <SignUpIn param={this.param} />
               
            </>
        )
    }

}