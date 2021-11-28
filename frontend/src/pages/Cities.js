import React from "react";
import Nav from "../components/Nav";
import CitiesImg from "../components/CitiesImg";
import Footer from "../components/Footer";


export default class Cities extends React.Component{

    constructor(){
        super();
        this.state = { galery: [] };
    }

    componentDidMount(){
        
            fetch('http://localhost:4000/api/galery')
              .then(res => res.json())
              .then(data => this.setState({galery:data.response}))
              .catch(err => console.error(err.message))
        
         
    }

    render(){
        return(
            <>
            <Nav/>
            <CitiesImg galery = {this.state.galery}/>
            <Footer/>
            </>
        )
    }



}