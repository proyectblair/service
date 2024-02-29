
import { Navbar, NavLink, NavbarBrand } from "reactstrap";


function Example(args) {
  
  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">PROYECTO DE SERVICIOS</NavbarBrand>
        <NavLink href="/login">Login</NavLink> 
      </Navbar>
    </div>
  );
}

export default Example;


