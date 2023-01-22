import React from 'react'
import Pagination from './Pagination'

function Footer({studenti}) {
  return (
   <footer className="futer">
    <Pagination studenti={studenti}/>
      <p>Januar 2023</p>
      <p>Za više detalja o nama posetite link</p>
     </footer>
   
  )
}

export default Footer
