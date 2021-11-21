import React from "react";
import Nav from "../components/Nav";
import Hero from '../components/Hero';
import Card from "../components/Card";
import Footer from "../components/Footer";
export default class Home extends React.Component{

      

    render(){
        
        return(
            <>
            <Nav/>
            <Hero/>
            <Card/>
            <Footer/>
            </>
        )
    }

}