import React from 'react'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Footer() {
  return (
    <footer style={{bottom:'0'}}>
      <Container>
         <Row>
          <Col sm={12} md={6} lg={4} >
            <img 
             src={Logo}
             alt='logo'
             className='log'/>
             <br/>
             <i className="fa-brands fa-facebook"></i>
             <i className="fa-brands fa-instagram"></i>
             <i className="fa-brands fa-x-twitter"></i>
             <i className="fa-brands fa-youtube"></i>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h2>Lien rapides</h2>
           
              <Link className='navl' to="/">Accueil</Link>
              <Link className='navl' to="/apropos">À propos</Link>
              <Link className='navl' to="/produit">Produit</Link>
              <Link className='navl' to="/contact">Contacts</Link>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h2>Contacts</h2>
            <li className='lifoot'><i className="fa-solid fa-phone-volume"></i> : 𝟬𝟬𝟮𝟮𝟳 𝟴𝟲𝟭𝟴𝟯𝟭𝟵𝟳 / 𝟳𝟬𝟰𝟳𝟰𝟳𝟮𝟴</li>
            <li className='lifoot'><i className="fa-solid fa-at"></i> : Contact@primetech.com</li>
            <li className='lifoot'><i className="fa-solid fa-location-dot"></i> : Nous sommes situé au Plateau en Face du Ministere de la jeunesse et du Sport</li>
          </Col>
         </Row>
      </Container>
    </footer>
  )
}

export default Footer
