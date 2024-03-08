import './App.css'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header'



function App() {


  return (
    
    <Router>
      <div>
     
        <Header/>
        <Footer/>

   
      <div>
        <Routes>
        <Route path="login" element={<Login/>} />
          <Route path="/dashboard" element={<PrivateRoute element={<Login />} />} />
         
        </Routes>
      </div>
      </div>
    </Router>
  
  )
}
export default App