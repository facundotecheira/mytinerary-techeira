import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import comentaryAction from '../redux/actions/comentaryAction';

import { connect } from 'react-redux';

const Itinerarios = (props) => {
    const [display, setDisplay] = useState(false)
    const HandleDisplay = () => setDisplay(!display)

    const {ite} = props
   
    useEffect (()=>{
        props.obtenerComentarios(ite._id)
      },[])

    // let id_user = props.usuario._id
    //   let vacio = 'No comments'
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

            

            {display && <div className="containerComentaryImg">
            <h3 className='text-center'>Activities</h3>
            <div className='images'>
            
                <div className='image'>
                    <img className="imageImg" src={`/assets/${ite.image1}`} />
                    <p>{ite.title1}</p>
                </div>
                <div className='image'>
                    <img className="imageImg" src={`/assets/${ite.image2}`} />
                    <p>{ite.title2}</p>
                </div>
                <div className='image'>
                    <img className="imageImg" src={`/assets/${ite.image3}`} />
                    <p>{ite.title3}</p>
                </div>
            </div>
                <div className="containerComentary">
                <h3 className='text-center'>Comments</h3>
                <p className='comment'>{props.listaComentario?props.listaComentario.comentary:'No comments' } <span className='ms-2'>{props.usuario? props.usuario._id == props.listaComentario.userId ?'editar':'no':'' }</span></p>
                <input type="text" className='comment'/>
                </div>
            </div>}
            <button className='buttonItinerary' onClick={HandleDisplay}> {display ? "view less" : "view more"}</button>
        </div>


    )
}

const mapStateToProps = (state) => {
    return {

        listaComentario: state.comentary.listComentary,
        usuario: state.user.usuario
    }
}

const mapDispatchToProps = {
    
    obtenerComentarios: comentaryAction.obtenerComentarios
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerarios)