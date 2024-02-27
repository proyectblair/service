import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar/Navbar';
import Login from './components/Navbar/Login/Login';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';




function App() {


  return (
    <Router>
      <div>
        <Navbar/>
        <Header/>
        <Form/>
        <Footer/>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </div>
    </Router>
      
  )

  }
export default App;
