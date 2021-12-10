import { useEffect } from 'react';
import countrysAction from '../redux/actions/countrysAction'
import { connect } from "react-redux";

const SignUpIn = (props) =>{
    
    const navigate = props.param 

    useEffect (()=>{
        props.obtenerPaises()
        
      },[])
            
    return(
        <>
        {navigate == '/signup'?(
            <div className="formContainer">
                <h2 className= "text-center">Register to start the adventure</h2>
            <form className='form'>
                
           <span> <input type="text" placeholder="First name"/></span>
            <span> <input type="text" placeholder="Last name"/></span>
            <span><input type="email" name="" id="" placeholder="Email"/></span>
            <span><input type="password" placeholder="Password"/></span>
            <span><input type="text" placeholder="Url profile picture"/></span>
            <span><select name="" id="">
              <option value="">Select your Country</option>
              {props.conuntries.map((pais)=>{
                  return(
                    <option value={pais.country}>{pais.country}</option>
                  )
              })}
              
            </select>
            </span>
            <input type="submit" value="Create account"></input>
            </form>
             </div>
            
            

        ):(
            <div className="formContainer">
                <h2 className= "text-center">Welcome back</h2>
            <form className='form'>
            <span><input type="email" name="" id="" placeholder="Email"/></span>
            <span><input type="password" placeholder="Password"/></span>
            <input type="submit" value="Log in"></input>
            </form>
             </div>
        )}
        </>
    )
}

const mapStateToProps = (state) =>{

    return{
      
      conuntries: state.country.countries
  
    }
  }

  const mapDispatchToProps = {
  
    obtenerPaises: countrysAction.getCountries
  
  }

export default connect(mapStateToProps,mapDispatchToProps)(SignUpIn)