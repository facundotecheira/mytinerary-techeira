const Nav = () => {
  return (

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#s">
          <img class="iconbrand" src="./assets/logo3.png" alt="iconbrand"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse menuH" id="navbarSupportedContent">
            
            <ul class="navbar-nav me-auto menuHC ">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#s">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#s">Cities</a>
              </li>


            </ul>

            <ul class="navbar-nav containeruser mb-2 mb-lg-0">

              <li class="nav-item dropdown ">

                <a class="nav-link dropdown-toggle" href="#s" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="imguser" src="./assets/person-circle.svg" alt="usericon"></img>
                </a>

                <ul class="dropdown-menu menuUser" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#s">Sign in</a></li>
                  <li><a class="dropdown-item" href="#s">Sign up</a></li>
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