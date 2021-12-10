import React from 'react'
import SignUpIn from '../components/SignUp-In'
import Nav from '../components/Nav';

export default class SignUP extends React.Component {

    constructor(props) {
        super(props)
    }

    navigate = this.props.location.pathname

    render() {

        return (
            <>
                <Nav />
                <SignUpIn param={this.navigate} />
             
            </>
        )
    }

}