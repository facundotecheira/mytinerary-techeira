import './App.css';
import Home from "./pages/Home";
import Cities from './pages/Cities';
import CitySinProps from './pages/City';
import SignUpSinProps from './pages/SignUp';
import SignInSinProps from './pages/SignIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {withRouter} from './utils/withRouter'


const City = withRouter(CitySinProps)
const SignUp = withRouter(SignUpSinProps)
const SignIn =withRouter(SignInSinProps)

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
       <Route path='/' element={<Home/>} /> 
       <Route path='/cities' element={<Cities/>} /> 
       <Route path = '/cities/:id' element = {<City/>} />
       <Route path = '/signup' element = {<SignUp/>} />
       <Route path = '/signin' element = {<SignIn/>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
