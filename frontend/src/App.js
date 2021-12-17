import './App.css';
import Home from "./pages/Home";
import Cities from './pages/Cities';
import CitySinProps from './pages/City';
import SignUpSinProps from './pages/SignUp';
import SignInSinProps from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { withRouter } from './utils/withRouter'
import { useEffect } from "react"
import { connect } from "react-redux"
import userAction from './redux/actions/userAction';

const City = withRouter(CitySinProps)
const SignUp = withRouter(SignUpSinProps)
const SignIn = withRouter(SignInSinProps)

function App(props) {

  useEffect(() => {

    const token = localStorage.getItem('token');
    props.signInLS(token)
    

  }, [])

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/cities/:id' element={<City />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>

    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  signInLS: userAction.signInLS
}

export default connect(null, mapDispatchToProps)(App);
