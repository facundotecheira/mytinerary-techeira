import { Link } from 'react-router-dom';

const Nav = () => {
  return (

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand">
            <img class="iconbrand" src="./assets/logo3.png" alt="iconbrand"></img>
          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse menuH" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto menuHC ">

              <li class="nav-item">
                
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>

              </li>
              <li class="nav-item">
                <Link to="/cities" class="nav-link active">
                  Cities
                </Link>
              </li>


            </ul>

            <ul class="navbar-nav containeruser mb-2 mb-lg-0">

              <li class="nav-item dropdown ">

                <a class="nav-link dropdown-toggle" href="#s" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="imguser" src="./assets/person-circle.svg" alt="usericon"></img>
                </a>

                <ul class="dropdown-menu menuUser" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/signin" class="dropdown-item">
                      Sign in
                    </Link>
                  </li>

                  <li>
                    <Link to="/signup" class="dropdown-item">
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