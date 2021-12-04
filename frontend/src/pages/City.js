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
    
    componentDidMount(){
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
                <div className="containerItinerary">
                    <div className="containerImgItinerary">
                        <img key={this.path} className="imgItinerary" alt={this.title} src="/assets/fuji.jpg" />
                    </div>
                    <div className="containerInfoItinerary">

                        <div className="section1">
                            <div className="containerDataAuthor">
                                <div className="nameAuthor">
                                    <img key={this.path} className="imgAuthor" alt={this.title} src={`/assets/${this.path}`} />
                                </div>
                                <h3>Facundo Techeira</h3>
                            </div>
                            <div>
                                <img key={this.path} className="imgLogoExploring" alt={this.title} src="/assets/logo-exploradores.png" />
                            </div>
                        </div>

                        <div className="section2">
                            <h3>
                                Excursion to Mount Fuji <span> ❤ 0</span>
                            </h3>
                            <p>
                                Mount Fuji is the highest mountain in Japan, and also an icon with which Japan is recognized around the world. In addition, this site, considered sacred for millennia
                            </p>

                        </div>

                        <div className="section3">
                            <Link to="/cities" className="ms-3">#amazing</Link>
                            <Link to="/cities" className="ms-3">#Mount Fuji</Link>
                            <Link to="/cities" className="ms-3" >#Japan</Link>
                            
                        </div>
                        
                        <div>
                            <span className="ms-3">
                                ⏳ 3 horas 💸💸💸
                            </span>
                        </div>


                    </div>
                </div>


                <h3 className="text-center">Under construction</h3>
                <div className="divButtonCity">
                    <Link to="/cities" className="buttonCity">Back to cities</Link>
                </div>



                <Footer />
            </>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        listaItinerary: state.itinerary.listItinerary
    }
}

const mapDispatchToProps = {
    obtenerItinerarios: itineraryAction.getAItinerary
    // filtrarcities: citiesAction.filtercities
  }

export default connect(mapStateToProps,mapDispatchToProps)(City)