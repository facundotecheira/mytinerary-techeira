// import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


const CitiesImg = (props) => {
  // window.scrollTo(0, 0);
  const galery = props.galery;
  const [busqueda, setBusqueda] = useState(" ");
  const [ciudades, setCiudades] = useState([]);



  const handleChange = e => {
    setBusqueda(e.target.value);
  }


  useEffect(() => { filtrar(busqueda) }, [busqueda])

  console.log(ciudades)

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = galery.filter((elemento) => {
      if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.trim().toLowerCase()) 
        || elemento.country.toString().toLowerCase().includes(terminoBusqueda.trim().toLowerCase()))
      {
        return elemento;
      }
    });
    setCiudades(resultadosBusqueda);

  }

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
    adaptiveHeight: false,
    pauseOnHover: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // rows: 8,
          adaptiveHeight: false,
          slidesPerRow: 2,
          infinite: false,

        }
      },
      {
        breakpoint: 768,
        settings: {
          // rows: 15,
          adaptiveHeight: false,
          dots: false,
          arrows: false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          adaptiveHeight: false,
          // rows: 15,
          slidesPerRow: 1,
          dots: false,
          arrows: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          // rows: 15,
          slidesPerRow: 1,
          dots: false,
          arrows: false,
          adaptiveHeight: false,

        }
      },
      {
        breakpoint: 400,
        settings: {
          // rows: 15,
          slidesPerRow: 1,
          dots: false,
          arrows: false,
          adaptiveHeight: false,

        }
      },
      {
        breakpoint: 360,
        settings: {
          // rows: 15,
          slidesPerRow: 1,
          arrows: false,
          dots: false,
          adaptiveHeight: false,

        }
      }
    ]


  }

  return (

    <>
      <h1 className='h1Galery'>All Cities</h1>
      <div className="citiesH2Input">
        <h2 className="text-center">FIND YOUR NEW ADVENTURE!</h2>
        <input className="citiInput" type="text" value={busqueda} placeholder=" Search a city or Country" onChange={handleChange} />
      </div>

      <div className="citiesGalery">
        <Slider {...settings}>
          {ciudades.length > 0 ? ciudades.map((gal) => {
            return (
              <div key={gal.title} className="galery">
                <div key={gal.title} className="galGalery">
                  <img key={gal.title} className="imgGalery" alt={gal.title} src={`./assets/${gal.path}`} />
                  <div className="titleGalery">

                    <h2 key={gal.title}>
                      {gal.title}, {gal.country}
                    </h2>
                    <Link className= "linktocity" to={`/cities/${gal.title}/${gal.path}/${gal.country}/${gal.currency}/${gal.language}`}>
                      Read more
                    </Link>
                  </div>
                </div>

              </div>
            )
          }) :
            <div className="containerEmpty">
              <div className="ayudaa">
                <h1>No results found</h1>
              </div>

            </div>
          }
        </Slider>

      </div>
    </>
  );
}


export default CitiesImg;