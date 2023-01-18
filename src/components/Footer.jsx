import React from 'react'
import {Link} from "react-router-dom"
import Pagination from './Pagination'

function Footer() {
  //<Link to='/about'>O nama</Link>
  //    <p>Ukoliko imate nedoumice, kontaktirajte nas</p>
    //  <Link to='/'>Kontakt</Link>
  return (
   <footer className="futer">
    <Pagination/>
      <p>Januar 2023</p>
      <p>Za više detalja o nama posetite link</p>
     
     </footer>
   
  )
}

export default Footer
