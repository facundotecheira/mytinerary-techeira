import { Link } from 'react-router-dom';

const Nav = () => {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img className="iconbrand" src="/assets/logo3.png" alt="iconbrand"></img>
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

            <ul className="navbar-nav containeruser mb-2 mb-lg-0">

              <li className="nav-item dropdown ">

                <a className="nav-link dropdown-toggle" href="#s" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="imguser" src="/assets/person-circle.svg" alt="usericon"></img>
                </a>

                <ul className="dropdown-menu menuUser" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/signin" className="dropdown-item">
                      Sign in
                    </Link>
                  </li>

                  <li>
                    <Link to="/signup" className="dropdown-item">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>



    </div>




  )
}

export default Nav