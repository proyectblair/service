import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
      <nav className="navbar">
      <div className="container">
        <a className="brand" href="#">BlairWitch</a>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#">home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  };
  
  export default Navbar;