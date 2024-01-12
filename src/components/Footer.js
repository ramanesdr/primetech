import React from 'react'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer style={{bottom:'0'}}>
      <div className=''>
         <div className='row'>
          <div className='col'>
            <img 
             src={Logo}
             alt='logo'
             className='log'/>
             <br/>
             <i className="fa-brands fa-facebook"></i>
             <i className="fa-brands fa-instagram"></i>
             <i className="fa-brands fa-x-twitter"></i>
             <i className="fa-brands fa-youtube"></i>
          </div>
          <div className='col'>
            <h2>Lien rapides</h2>
           
              <Link className='navl' to="/">Accueil</Link>
              <Link className='navl' to="/apropos">À propos</Link>
              <Link className='navl' to="/produit">Produit</Link>
              <Link className='navl' to="/contact">Contacts</Link>
          </div>
          <div className='col'>
            <h2>Contacts</h2>
            <li className='lifoot'><i className="fa-solid fa-phone-volume"></i> : 𝟬𝟬𝟮𝟮𝟳 𝟴𝟲𝟭𝟴𝟯𝟭𝟵𝟳 / 𝟳𝟬𝟰𝟳𝟰𝟳𝟮𝟴</li>
            <li className='lifoot'><i className="fa-solid fa-at"></i> : Contact@primetech.com</li>
            <li className='lifoot'><i className="fa-solid fa-location-dot"></i> : Nous sommes situé au Plateau en Face du Ministere de la jeunesse et du Sport</li>
          </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer
