import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';

function Navb() {
  return (
    <Navbar expand="lg" className="justify-content-center">
      <Container>
        <img
          src={Logo}
          alt='Logo'
          className='logo'
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='nav'>
            <Nav.Link><Link className='navli' to="/">Accueil</Link></Nav.Link>
            <Nav.Link><Link className='navli' to="/apropos">À propos</Link></Nav.Link>
            <Nav.Link><Link className='navli' to="/produit">Produit</Link></Nav.Link>
            <Nav.Link><Link className='navli' to="/contact">Contacts</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
