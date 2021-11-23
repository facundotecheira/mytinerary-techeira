import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Galery from "./Array";

const Carousel = () => {
  const settings = {
    arrows: true,
    infinite: true,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    speed: 0,
    autoplaySpeed: 4000,
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
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          
          dots:true,
          arrows: false,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          rows: 4,
          slidesPerRow: 1,
          dots:true,
          arrows: false,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          rows: 4,
          slidesPerRow: 1,
          dots:true,
          arrows: false,
          
        }
      },
      {
        breakpoint: 400,
        settings: {
          rows: 4,
          slidesPerRow: 1,
          dots:true,
          arrows: false,
          
        }
      },
      {
        breakpoint: 360,
        settings: {
          rows: 4,
          slidesPerRow: 1,
          arrows: false,
          dots:true,
          
        }
      }
    ]


  }
  return (
    <>
      <h1 className='h1Galery'>Popular MYtineraries</h1>
      <div className="divGalery">
        <Slider {...settings}>
          {Galery.map((gal) => {
            return (
              <div key={gal.title} className="galery">
                <div key={gal.title} className="galGalery">
                  <img key={gal.title} className="imgGalery" alt={gal.title} src={`./assets/${gal.ruta}`} />
                  <div className="titleGalery">

                    <h2 key={gal.title}>
                      {gal.title}
                    </h2>

                  </div>
                </div>

              </div>
            )
          })}
        </Slider>

      </div>
    </>
  )
}



export default Carousel;
