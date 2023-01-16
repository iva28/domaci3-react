import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
   <footer className="futer">
      <p>Januar 2023</p>
      <p>Za više detalja o nama posetite link</p>
      <Link to='/'>O nama</Link>
      <p>Ukoliko imate nedoumice, kontaktirajte nas</p>
      <Link to='/'>Kontakt</Link>
     </footer>
   
  )
}

export default Footer
