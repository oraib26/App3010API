import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
function NavReact() {
  return (
    <Navbar expand="lg" className="bg-info-subtle py-3">
      <Container>
        <Navbar.Brand href="#home" className='border px-3 bg-danger-subtle rounded-pill border-black'>API-React-Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/products" className='pe-3 m-auto text-black link-underline link-underline-opacity-0'>Products</Link>
            <NavDropdown title="Resturant" id="basic-nav-dropdown">
              <Link to="/resturant/pizza" className='d-block m-auto text-black link-underline link-underline-opacity-0'>Pizza</Link>
              <Link to="/resturant/hamburger" className='d-block m-auto text-black link-underline link-underline-opacity-0'>Hamburger</Link>
              <Link to="/resturant/fish" className='d-block m-auto text-black link-underline link-underline-opacity-0'>Fish</Link>
              
            </NavDropdown>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavReact;