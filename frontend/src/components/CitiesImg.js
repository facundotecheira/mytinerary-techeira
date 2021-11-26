import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const CitiesImg = () => {

  const [galery, setGalery] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/galery')
      .then(res => res.json())
      .then(data => setGalery(data.response.galery))
      .catch(err => console.err(err.message))

  }, [])

  const settings = {
    arrows: false,
    infinite: false,
    rows: 8,
    slidesPerRow: 2,
    autoplay: false,
    // speed: 0,
    // autoplaySpeed: 4000,
    cssEase: "linear",
    className: "slides",
    adaptiveHeight: true,
    pauseOnHover: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          infinite: false,

        }
      },
      {
        breakpoint: 768,
        settings: {

          dots: false,
          arrows: false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          rows: 4,
          slidesPerRow: 1,
          dots: false,
          arrows: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          rows: 4,
          slidesPerRow: 1,
          dots: false,
          arrows: false,

        }
      },
      {
        breakpoint: 400,
        settings: {
          rows: 4,
          slidesPerRow: 1,
          dots: false,
          arrows: false,

        }
      },
      {
        breakpoint: 360,
        settings: {
          rows: 4,
          slidesPerRow: 1,
          arrows: false,
          dots: false,

        }
      }
    ]


  }

  return (
    <>
      <h1 className='h1Galery'>All Cities</h1>
      <div className = "citiesH2Input">
          <h2 className="text-center">FIND YOUR NEW ADVENTURE!</h2>
          <input className="citiInput" type="text" placeholder="Search a city" />
      </div>

      <div className="citiesGalery">
        <Slider {...settings}>
          {galery.map((gal) => {
            return (
              <div key={gal.title} className="galery">
                <div key={gal.title} className="galGalery">
                  <img key={gal.title} className="imgGalery" alt={gal.title} src={`./assets/${gal.ruta}`} />
                  <div className="titleGalery">

                    <h2 key={gal.title}>
                      {gal.title}, {gal.country}
                    </h2>

                  </div>
                </div>

              </div>
            )
          })}
        </Slider>

      </div>
    </>
  );
}


export default CitiesImg;