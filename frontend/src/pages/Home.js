import React from "react";
import Nav from "../components/Nav";
import Hero from '../components/Hero';
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";



export default class Home extends React.Component {


  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <Nav />
        <Hero />
        <Carousel/>
        <Footer />
      </>
    )
  }

}