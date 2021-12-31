import { Link } from 'react-router-dom';
import { connect, useSelector } from "react-redux";
import userAction from '../redux/actions/userAction';


const Nav = (props) => {
  // console.log(props.usuario._id)
  return (
    
    <div>
      {/* {props.usuario.firstName} */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img className="iconbrand" src="/assets/Logo3.png" alt="iconbrand"></img>
          </Link>
          

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menuH" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto menuHC ">


              <li className="nav-item">

                <Link to="/" className="nav-link active" aria-current="page">
                  Home

                </Link>

              </li>

          

              <li className="nav-item">
                <Link to="/cities" className="nav-link active">
                  Cities
                </Link>
              </li>


            </ul>
            

            <div className='d-flex align-items-center'>

            {props.usuario?<p className='mt-3'>Welcome! {props.usuario.firstName}</p>:''}

            <ul className="navbar-nav containeruser mb-2 mb-lg-0">

                

              <li className="nav-item dropdown ">

          
                <a className="nav-link dropdown-toggle " href="#s" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              
                {props.usuario?<img className="imguser ms-4 mt-2" src={props.usuario.url} alt="usericon"></img>:
                
                <img className="imguser" src="/assets/person-circle.svg" alt="usericon"></img>}
            
                </a>
              
                <ul className="dropdown-menu menuUser" aria-labelledby="navbarDropdown">


                  {!props.usuario && (
                    <li>
                      <Link to="/signin" className="dropdown-item">
                        Sign in

                      </Link>
                    </li>
                  )}

                  {!props.usuario && (
                    <li>
                      <Link to="/signup" className="dropdown-item">
                        Sign up
                      </Link>
                    </li>
                  )}

                  {props.usuario && (

                    <li >
                      <Link to="/" className="dropdown-item signout-link ">
                        <p className='signout' onClick={()=> props.cerrarSesion()}> Sign out</p>
                      </Link>
                    </li>

                  )}





                </ul>
              </li>

            </ul>
            </div>
          </div>
        </div>
      </nav>



    </div>




  )
}

const mapStateToProps = (state) => {
  return {

      usuario: state.user.usuario
  }
}

const mapDispatchToProps = {
  cerrarSesion: userAction.cerrarSesion
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav)