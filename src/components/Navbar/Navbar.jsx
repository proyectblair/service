// eslint-disable-next-line no-unused-vars
import {React, useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, NavbarBrand, Nav, Form } from 'reactstrap';


const CustomNavbar = () =>  {
   

    return (
      <div className="navbar">
        <BootstrapNavbar className="navbar-shadow" expand="md"> 
         <Nav className="ml-auto" navbar>
          <NavbarBrand href="#">Blair Witch</NavbarBrand>
           <Link to="/login">
              <Form class="form-inline mr-auto">
              <button className="btn outline-success mr-2" >Log in</button>
              <button className="btn outline-secondary mr-2">Sign Up</button>
            </Form>
            </Link>
          </Nav>
      </BootstrapNavbar>
      
    </div>
    );
  };
  
  export default CustomNavbar;