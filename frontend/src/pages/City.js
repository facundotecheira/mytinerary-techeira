import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Itinerarios from '../components/Itinerarios'
import { Link } from 'react-router-dom'
import citiesAction from '../redux/actions/citiesAction';
import itineraryAction from '../redux/actions/itineraryAction'
import { connect } from 'react-redux';

class City extends React.Component {


    constructor(props) {

        super(props)
        console.log(props)

    }


    id = this.props.params.id


    componentDidMount() {
        this.props.obtenerItinerarios(this.id)
        this.props.obtenerUnaCiudad(this.id)
    }



    render() {
        const { title, country, path, currency, language } = this.props.listOneCity
        window.scrollTo(0, 0);

        return (


            <>
                <Nav />
                <h1 className="titleCity">{title} {country}</h1>
                <div className="containerCity">
                    <div className="containerCityInfo">

                        <h3 >Currency: {currency}</h3>
                        <h3 >Language: {language}</h3>


                    </div>
                    <div className="containerImgCity">
                        <img className="imgCity" alt={title} src={`/assets/${path}`} />
                    </div>

                </div>
                {this.props.listaItinerary.length > 0 ? this.props.listaItinerary.map((ite) => {
                    return (

                        <Itinerarios key={ite._id} ite={ite} />
                    )
                }) : <div className="containerEmpty">
                    <div className="ayudaa">
                        <h1>No itinerary found</h1>
                    </div>
                    </div>}


                    <div className="divButtonCity">
                        <Link key={'back'} to="/cities" className="buttonCity">Back to cities</Link>
                    </div>

                    <Footer />
                </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
                    listaItinerary: state.itinerary.listItinerary,
                listOneCity: state.galery.city
    }
}

                const mapDispatchToProps = {
                    obtenerItinerarios: itineraryAction.getAItinerary,
                obtenerUnaCiudad:  citiesAction.getOneCity

}

                export default connect(mapStateToProps, mapDispatchToProps)(City)