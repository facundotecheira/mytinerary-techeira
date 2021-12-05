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

        console.log(this.props.listaItinerary)

        window.scrollTo(0, 0);
       
        return (


            <>
                <Nav />
                <h1 className="titleCity">{this.title} {this.country}</h1>
                <div className="containerCity">
                    <div className="containerCityInfo">

                        <h3>Currency: {this.currency}</h3>
                        <h3>Language: {this.language}</h3>
                        <h3>Id: {this.id}</h3>

                    </div>
                    <div className="containerImgCity">
                        <img key={this.path} className="imgCity" alt={this.title} src={`/assets/${this.path}`} />
                    </div>

                </div>
                {this.props.listaItinerary.length>0 ? this.props.listaItinerary.map((ite) => {
                    return (
                        <div className="containerItinerary">
                            <div className="containerImgItinerary">
                                <img key={this.path} className="imgItinerary" alt={this.title} src={`/assets/${ite.imageItinerary}`} />
                            </div>
                            <div className="containerInfoItinerary">

                                <div className="section1">
                                    <div className="containerDataAuthor">
                                        <div className="nameAuthor">
                                            <img key={this.path} className="imgAuthor" alt={this.title} src={`/assets/${ite.imageAuthor}`} />
                                        </div>
                                        <h3>{ite.nameAuthor}</h3>
                                    </div>
                                    <div>
                                        <img key={this.path} className="imgLogoExploring" alt={this.title} src="/assets/logo-exploradores.png" />
                                    </div>
                                </div>

                                <div className="section2">
                                    <h3>
                                        {ite.title} <span> ❤ {ite.like}</span>
                                    </h3>
                                    <p>
                                        {ite.description}
                                    </p>

                                </div>

                                <div className="section3">
                                    <Link to="/cities" className="ms-3">{ite.hashtags}</Link>

                                </div>

                                <div>
                                    <span className="ms-3">
                                        {ite.hours} {ite.price}
                                    </span>
                                </div>


                            </div>
                        </div>
                    )
                }):<div className="containerEmpty">
                <div className="ayudaa">
                  <h1>No results found</h1>
                </div>
  
              </div>}



                <h3 className="text-center">Under construction</h3>
                <div className="divButtonCity">
                    <Link to="/cities" className="buttonCity">Back to cities</Link>
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