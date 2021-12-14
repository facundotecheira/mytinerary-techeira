import { useEffect } from "react";
import countrysAction from "../redux/actions/countrysAction";
import { connect } from "react-redux";
import { useRef } from "react";
import userAction from "../redux/actions/userAction";
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

const SignUpIn = (props) => {



  const { handleSubmit } = props;

  const navigate = props.param;

  // data to send
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputUrl = useRef();
  const inputCountry = useRef();


  // Sign up google


  const responseGoogle = (res) => {
    let googleUser = {
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      url: res.profileObj.imageUrl,
      country: 'Argentina',
      google: true
    }

    props.handleSubmit(googleUser.firstName,
      googleUser.lastName,
      googleUser.email,
      googleUser.password,
      googleUser.url,
      googleUser.country,
      googleUser.google)
      .then((response) => response.data.success)
      .catch((error) => console.log(error))
  }


  // Sign in google

  const responseGoogles = (res) => {
    let googleUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      google: true,
    }
    props.handleSubmit(googleUser.email, googleUser.password, googleUser.google)
  }




  const clear = (...algo) => { };

  const handleSubmitInputs = (e) => {
    e.preventDefault();

    navigate == "/signup"
      ? handleSubmit(
        inputFirstName.current.value,
        inputLastName.current.value,
        inputEmail.current.value,
        inputPassword.current.value,
        inputUrl.current.value,
        inputCountry.current.value,

      )
        ? clear(
          (inputFirstName.current.value = ""),
          (inputLastName.current.value = ""),
          (inputEmail.current.value = ""),
          (inputPassword.current.value = ""),
          (inputUrl.current.value = ""),
          (inputCountry.current.value = "")
        )
        : console.log("")
      : handleSubmit(inputEmail.current.value, inputPassword.current.value)
        ? clear(
          (inputEmail.current.value = ""),
          (inputPassword.current.value = "")
        )
        : console.log("");
  };

  useEffect(() => {
    props.obtenerPaises();
  }, []);

  return (
    <>
      {navigate == "/signup" ? (
        <div className="formContainer">
          <h2 className="text-center titleForm">Register to start the adventure</h2>
          <form className="form" onSubmit={handleSubmitInputs}>
            <span> <input ref={inputFirstName} type="text" placeholder="First name" /> </span>
            <span><input ref={inputLastName} type="text" placeholder="Last name" /></span>
            <span><input ref={inputEmail} type="email" name="" id="" placeholder="Email" /></span>
            <span><input ref={inputPassword} type="password" placeholder="Password" /></span>
            <span><input ref={inputUrl} type="text" placeholder="Url profile picture" /></span>
            <span>
              <select ref={inputCountry} name="country" id="">
                <option value="">Select your Country</option>
                {props.conuntries.map((pais) => {
                  return <option value={pais.country}>{pais.country}</option>;
                })}
              </select>
            </span>
            <input className="formSubmit" type="submit" value="Create account"></input>
            <Link to="/signin" className="">
             Do you already have an account

            </Link>
          </form>
          <div className="google">
            <GoogleLogin
              clientId="1083246067612-q4fqup81pi8sq5cfaqiafm7t3qcsniv1.apps.googleusercontent.com"
              buttonText="Sign up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"} />
          </div>


        </div>
      ) : (
        <div className="formContainer">
          <h2 className="text-center titleForm">Welcome back</h2>
          <form className="form" onSubmit={handleSubmitInputs}>
            <span><input ref={inputEmail} type="email" name="" id="" placeholder="Email" /></span>
            <span><input ref={inputPassword} type="password" placeholder="Password" /></span>
            <input className="formSubmit" type="submit" value="Sign In"></input>
            <Link to="/signup" className="">
            Don't have an account 

            </Link>
          </form>
          <div className="google">
            <GoogleLogin
              clientId="1083246067612-q4fqup81pi8sq5cfaqiafm7t3qcsniv1.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogles}
              onFailure={responseGoogles}
              cookiePolicy={"single_host_origin"} />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    conuntries: state.country.countries,
  };
};

const mapDispatchToProps = {
  obtenerPaises: countrysAction.getCountries,
  registerUser: userAction.registrarUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpIn);
