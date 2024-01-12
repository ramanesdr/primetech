import React from 'react'
import Carosel from '../components/Carousel'
import About from '../components/about'
import Prod from '../components/prod'
import Choix from '../components/choix'
function Accueil() {
  return (
    <div>
      <Carosel />
      <About />
      <Prod />
      <Choix />
    </div>
  )
}

export default Accueil
