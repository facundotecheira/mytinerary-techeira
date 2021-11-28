import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
export default class City extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)

    }

    state = {
        elemento: { name: '-' },
    }

    title = this.props.params.title;
    path = this.props.params.path;
    country = this.props.params.country;
    currency = this.props.params.currency;
    language = this.props.params.language;

    // componentDidMount(){
    //     this.setState({elemento:this.title})
    //     console.log(this.state.elemento)
    // }

    render() {
        // console.log(this.title);
        // console.log(this.ruta);
        return (
            <>
                <Nav />
                <h1 className="titleCity">{this.title} {this.country}</h1>
                <div className="containerCity">
                    <div className="containerCityInfo">
                        {/* <h2>Useful information for you</h2> */}
                        <h3>Currency: {this.currency}</h3>
                        <h3>Language: {this.language}</h3>
                        {/* <p>Hola soy dato que pasa</p>
                        <p>Hola soy dato que pasa</p> */}
                    </div>
                    <div className="containerImgCity">
                        <img key={this.path} className="imgCity" alt={this.title} src={`/assets/${this.path}`} />
                    </div>

                </div>
                <h3 className="text-center">Under construction</h3>
                <div className="divButtonCity">
                    <Link to="/cities" className = "buttonCity">Back to cities</Link>
                </div>
                
                
                
                <Footer />
            </>
        )
    }

}