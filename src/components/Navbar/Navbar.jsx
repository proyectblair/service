
//import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css';


const CustomNavbar = () =>  {
    return (
      <nav className="navbar">
      <div className="container">
        <a className="brand" href="#">BlairWitch</a>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
          </ul>
      </div>
    </nav>
    );
  };
  
  export default CustomNavbar;