import React from "react";
import Nav from "../components/Nav";
import Hero from '../components/Hero';
import Card from "../components/Card";
import Footer from "../components/Footer";
export default class Home extends React.Component{

    // state = {
    //  Galeria : [
    //         { ruta: 'japang.png' ,title: 'Japan' },
    //         { ruta: 'canada.png', title: 'Canada' }
    //         // { ruta: 'japang.png' ,title: 'Japan' },
    //         // { ruta: 'canada.png', title: 'Canada' }
           
    //     ]
    // }

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