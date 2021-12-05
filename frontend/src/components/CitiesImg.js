import { Link } from 'react-router-dom'
import { useEffect,useRef, useState } from 'react';
import citiesAction from "../redux/actions/citiesAction";
import { connect } from "react-redux";


const CitiesImg = (props) => {
  const e = useRef();

  const [ciudades, setCiudades] = useState(props.cities);

  
  useEffect (()=>{
    props.filtrarcities(e.current.value)
  },[])

  

  useEffect(()=>{
    if(ciudades !== props.auxiliar ){
      setCiudades(props.auxiliar) 
    }
  },[props.auxiliar])

    
    const filtrando = ()=>{
      props.filtrarcities(e.current.value)
    }
  

 
  return (

    <>
      <h1 className='h1Galery'>All Cities</h1>
      <div className="citiesH2Input">
        <h2 className="text-center">FIND YOUR NEW ADVENTURE!</h2>
        <input className="citiInput" type="text" ref={e}  onChange={filtrando} placeholder=" Search a city or Country"  />
      </div>

    
      <div className="citiesGalery">
     
          {ciudades.length > 0 ? ciudades.map((gal) => {
            
            return (
              <div key={gal.title} className="galery">
                <div key={gal.title} className="galGalery">
                  <img key={gal.title} className="imgGalery" alt={gal.title} src={`./assets/${gal.path}`} />
                  <div className="titleGalery">

                    <h2 key={gal.title}>
                      {gal.title}, {gal.country}
                    </h2>
                    <Link className= "linktocity" to={`/cities/${gal.title}/${gal.path}/${gal.country}/${gal.currency}/${gal.language}/${gal._id}`}>
                      Read more
                    </Link>
                  </div>
                </div>

              </div>
            )
          }) :
            <div className="containerEmpty">
              <div className="ayudaa">
                <h1>No results found</h1>
              </div>

            </div>
          }
        </div>
     
    </>
  );
}

const mapStateToProps = (state) =>{

  return{
    
    auxiliar: state.galery.auxiliar

  }
}

const mapDispatchToProps = {
  
  filtrarcities: citiesAction.filtercities

}



export default connect(mapStateToProps,mapDispatchToProps)(CitiesImg);
