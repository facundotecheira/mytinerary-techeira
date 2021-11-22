import React from "react";
import Nav from "../components/Nav";
import Hero from '../components/Hero';
import Galery from "../components/Array";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default class Home extends React.Component {


  render() {
    const settings = {
      // dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      cssEase: "linear",
      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


    }
    return (
      <>
        <Nav />
        <Hero />
        <h1 className='h1Galery'>Popular MYtineraries</h1>
        <div className="divGalery">
          <Slider {...settings}>
            {Galery.map((gal) => {
              return (
                <div className="galery">
                  <div className="galGalery">
                    <img className="imgGalery" alt={gal.title} src={`./assets/${gal.ruta}`} />
                    <div className="titleGalery">

                      <h2>
                        {gal.title}
                      </h2>

                    </div>
                  </div>

                </div>
              )
            })}
          </Slider>

        </div>

        <Footer />
      </>
    )
  }

}