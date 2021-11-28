import './App.css';
import Home from "./pages/Home";
import Cities from './pages/Cities';
import CitySinProps from './pages/City';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {withRouter} from './utils/withRouter'

const City = withRouter(CitySinProps)

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
       <Route path='/' element={<Home/>} /> 
       <Route path='/cities' element={<Cities/>} /> 
       <Route path = '/cities/:title/:path/:country/:currency/:language' element = {<City/>}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
