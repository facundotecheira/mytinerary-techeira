import { useEffect } from 'react';
import countrysAction from '../redux/actions/countrysAction'
import { connect } from "react-redux";
import { useRef } from 'react'
import { use } from 'passport';

const SignUpIn = (props) => {
  const { handleSubmit } = props;

  const navigate = props.param

  // data to send
  const inputFirstName = useRef()
  const inputLastName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()
  const inputUrl = useRef()
  const inputCountry = useRef()

  const clear = (...algo) => {

  }


  const handleSubmitInputs = (e) => {
    e.preventDefault()

    navigate == '/signup' ? (

      handleSubmit(inputFirstName.current.value, inputLastName.current.value,
        inputEmail.current.value, inputPassword.current.value, inputUrl.current.value,
        inputCountry.current.value) ?
        clear(inputFirstName.current.value = '',
          inputLastName.current.value = '',
          inputEmail.current.value = '',
          inputPassword.current.value = '',
          inputUrl.current.value = '',
          inputCountry.current.value = '') : console.log('')


    ) : handleSubmit(inputEmail.current.value, inputPassword.current.value) ?
      clear(inputEmail.current.value = '',
        inputPassword.current.value = '') : console.log('')


  }

  useEffect(() => {
    props.obtenerPaises()

  }, [])

  return (
    <>
      {navigate == '/signup' ? (
        <div className="formContainer">
          <h2 className="text-center">Register to start the adventure</h2>
          <form className='form' onSubmit={handleSubmitInputs}>

            <span><input ref={inputFirstName} type="text" placeholder="First name" /></span>
            <span> <input ref={inputLastName} type="text" placeholder="Last name" /></span>
            <span><input ref={inputEmail} type="email" name="" id="" placeholder="Email" /></span>
            <span><input ref={inputPassword} type="password" placeholder="Password" /></span>
            <span><input ref={inputUrl} type="text" placeholder="Url profile picture" /></span>
            <span><select ref={inputCountry} name="country" id="">
              <option value="">Select your Country</option>
              {props.conuntries.map((pais) => {
                return (
                  <option value={pais.country}>{pais.country}</option>
                )
              })}

            </select>
            </span>
            <input type="submit" value="Create account"></input>
          </form>
        </div>



      ) : (
        <div className="formContainer">
          <h2 className="text-center">Welcome back</h2>
          <form className='form' onSubmit={handleSubmitInputs}>
            <span><input ref={inputEmail} type="email" name="" id="" placeholder="Email" /></span>
            <span><input ref={inputPassword} type="password" placeholder="Password" /></span>
            <input type="submit" value="Sign In"></input>
          </form>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {

  return {

    conuntries: state.country.countries

  }
}

const mapDispatchToProps = {

  obtenerPaises: countrysAction.getCountries

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpIn)