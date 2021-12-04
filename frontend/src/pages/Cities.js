import React from "react";
import Nav from "../components/Nav";
import CitiesImg from "../components/CitiesImg";
import Footer from "../components/Footer";
import citiesAction from "../redux/actions/citiesAction";
import { connect } from "react-redux";

 class Cities extends React.Component{



    componentDidMount(){
        this.props.obtenerCiudades()
    }
    
    render(){
        return(
            <>
            <Nav />
            {this.props.listacities.length > 0 && <CitiesImg cities = {this.props.listacities}/>}
            <Footer/>
            </>
        )
    }

  

}

const mapStateToProps = (state) =>{

    return{
        listacities: state.galery.listCities,
      
    }
  }
  
  const mapDispatchToProps = {
    obtenerCiudades: citiesAction.getCities,
    // filtrarcities: citiesAction.filtercities
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(Cities);