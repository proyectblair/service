import './App.css'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Navbar  from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {


  return (
    
    <Router>
      <div>
        <Navbar/> 
        <Header/>
        <Footer/>

   
      <div>
        <Routes>
        <Route path="login" element={<Login/>} />
          <Route path="/dashboard" element={<PrivateRoute element={<Login />} />} />
          <Route path="/" element={<Form/>} />
        </Routes>
      </div>
      </div>
    </Router>
    
  )
}
export default App