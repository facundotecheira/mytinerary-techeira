import './App.css';
import Home from "./pages/Home";
import Cities from './pages/Cities';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

 
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cities' element={<Cities/>} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
