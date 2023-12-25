import './App.css'
import Home from './Screens/Home'
import Login from './Screens/Login'
import SignUp from './Screens/SignUp'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signUp' element = {<SignUp/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
