import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import itineraryAction from '../redux/actions/itineraryAction'
import { connect } from 'react-redux';

class City extends React.Component {


    constructor(props) {

        super(props)
        console.log(props)

    }

    title = this.props.params.title;
    path = this.props.params.path;
    country = this.props.params.country;
    currency = this.props.params.currency;
    language = this.props.params.language;
    id = this.props.params.id


    componentDidMount() {
        this.props.obtenerItinerarios(this.id)
    }

    

    render() {

        window.scrollTo(0, 0);

        return (


            <>
                <Nav />
                <h1  className="titleCity">{this.title} {this.country}</h1>
                <div   className="containerCity">
                    <div   className="containerCityInfo">

                        <h3 >Currency: {this.currency}</h3>
                        <h3 >Language: {this.language}</h3>


                    </div>
                    <div  className="containerImgCity">
                        <img  className="imgCity" alt={this.title} src={`/assets/${this.path}`} />
                    </div>

                </div>
                {this.props.listaItinerary.length > 0 ? this.props.listaItinerary.map((ite) => {
                    return (
                        <div  key={ite._id} className="containerItinerary">
                            <div key ={'containerImgItinerary'}  className="containerImgItinerary">
                                <img  className="imgItinerary" key={ite.imageItinerary} alt={this.title} src={`/assets/${ite.imageItinerary}`} />
                            </div>
                            <div key={'nose1'} className="containerInfoItinerary">

                                <div key={'nose2'} className="section1">
                                    <div key={'nose3'} className="containerDataAuthor">
                                        <div key={'nose4'} className="nameAuthor">
                                            <img  className="imgAuthor" key={ite.imageAuthor} alt={this.title} src={`/assets/${ite.imageAuthor}`} />
                                        </div>
                                        <h3 key={ite.nameAuthor}>{ite.nameAuthor}</h3>
                                    </div>
                                    <div key={'nose5'} className="logoExploring">
                                        <img  className="imgLogoExploring" key={this.title} alt={this.title} src="/assets/logo-exploradores.png" />
                                    </div>
                                </div>

                                <div key={'nose5'} className="section2">
                                    <h3 key={ite.title}>
                                        {ite.title} <span key={ite.like}> ❤ {ite.like}</span>
                                    </h3>
                                    <p key={ite.description}>
                                        {ite.description}
                                    </p>

                                </div>

                                <div key={'nose6'} className="section3">
                                    <Link to="/cities" key={ite.hashtags} className="ms-3">{ite.hashtags}</Link>

                                </div>

                                <div key={'nose7'} >
                                    <span key={ite.hours} className="ms-3">
                                        {ite.hours} {ite.price}
                                    </span>
                                </div>


                                <button key={'view more'} type="button"  className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    view more
                                </button>


                                <div key={'nose8'} className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div key={'nose9'} className="modal-dialog">
                                        <div key={'nose10'} className="modal-content">
                                            <div key={'nose11'}  className="modal-body">
                                                <h3 key={'under'}  className="text-center">Under construction</h3>
                                            </div>
                                            <div key={'nose12'} className="modal-footer">
                                                 <button key={'close'}  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }) : <div  className="containerEmpty">
                    <div  className="ayudaa">
                        <h1 key={'No itinerary found'}>No itinerary found</h1>
                    </div>

                </div>}


                <div   className="divButtonCity">
                    <Link key={'back'} to="/cities" className="buttonCity">Back to cities</Link>
                </div>

                <Footer />
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        listaItinerary: state.itinerary.listItinerary
    }
}

const mapDispatchToProps = {
    obtenerItinerarios: itineraryAction.getAItinerary

}

export default connect(mapStateToProps, mapDispatchToProps)(City)