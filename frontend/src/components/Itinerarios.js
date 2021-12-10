import { useState } from 'react'
import { Link } from 'react-router-dom'
const Itinerarios = ({ ite }) => {
    const [display, setDisplay] = useState(false)
    const HandleDisplay = () => setDisplay(!display)

    return (

        <div key={'1'} className="containerItinerary">
            <div  className="containerImgItinerary">
                <img className="imgItinerary"  src={`/assets/${ite.imageItinerary}`} />
            </div>
            <div key={'2'} className="containerInfoItinerary">

                <div key={'section1'}  className="section1">
                    <div key={"containerDataAuthor"} className="containerDataAuthor">
                        <div key={"nameAuthor"} className="nameAuthor">
                            <img className="imgAuthor" src={`/assets/${ite.imageAuthor}`} />
                        </div>
                        <h3 >{ite.nameAuthor}</h3>
                    </div>
                    <div  key={"logoExploring"} className="logoExploring">
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
                    <span  className="ms-3">
                        {ite.hours} {ite.price}
                    </span>
                </div>


                {display && <div className="actividad">
                    <h3>Under construction</h3>

                </div>}
                <button className="actividades" onClick={HandleDisplay}> {display ? "view less" : "view more"}</button>
            </div>
               

            </div>
       

    )
}


export default Itinerarios