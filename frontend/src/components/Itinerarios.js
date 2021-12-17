import { useState } from 'react'
import { Link } from 'react-router-dom'
const Itinerarios = ({ ite }) => {
    const [display, setDisplay] = useState(false)
    const HandleDisplay = () => setDisplay(!display)

    return (

        <div className="containerItinerary">
            <div className='containerImgInformation'>
                <div className="containerImgItinerary">
                    <img className="imgItinerary" src={`/assets/${ite.imageItinerary}`} />
                </div>
                <div className="containerInfoItinerary">

                    <div key={'section1'} className="section1">
                        <div key={"containerDataAuthor"} className="containerDataAuthor">
                            <div key={"nameAuthor"} className="nameAuthor">
                                <img className="imgAuthor" src={`/assets/${ite.imageAuthor}`} />
                            </div>
                            <h3 >{ite.nameAuthor}</h3>
                        </div>
                        <div key={"logoExploring"} className="logoExploring">
                            <img className="imgLogoExploring" src="/assets/logo-exploradores.png" />
                        </div>
                    </div>

                    <div key={'section2'} className="section2">
                        <h3 >
                            {ite.title} <span > ❤ {ite.like}</span>
                        </h3>
                        <p >
                            {ite.description}
                        </p>

                    </div>

                    <div key={'section3'} className="section3">
                        <Link to="/cities" className="ms-3">{ite.hashtags}</Link>

                    </div>

                    <div key={'section4'} >
                        <span className="ms-3">
                            {ite.hours}    Price: {ite.price}
                        </span>
                    </div>



                </div>
            </div>
            <div className='images'>
                <div className='image'>
                    <img className="imageImg" src="/assets/japan-fouji-1.jpg" />
                    <p>Private Tour: Chartered Car to Mt. Fuji Lake Kawaguchiko or Hakone and Lake Ashi</p>
                </div>
                <div className='image'>
                    <img className="imageImg" src="/assets/japan-fouji-2.jpg" />
                    <p>Private Full Day Sightseeing Tour to Mount Fuji and Hakone</p>
                </div>
                <div className='image'>
                    <img className="imageImg" src="/assets/japan-fouji-3.jpg" />
                    <p>1 Day Private Mt Fuji Tour (Charter) - English Speaking Driver</p>
                </div>
            </div>
            {display && <div className="mt-3">
                <h3 className='text-center'>Under construction</h3>

            </div>}
            <button className='buttonItinerary' onClick={HandleDisplay}> {display ? "view less" : "view more"}</button>
        </div>


    )
}


export default Itinerarios