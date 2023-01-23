import React from 'react'
import { Link } from 'react-router-dom'
import IPAdresa from './IPAdresa'


function AboutUs({ changePageName}) {

  changePageName(true);

  return (
    <div className="about-us">
      <h5>Ovo je sajt za evidenciju studenata, namenjen fakultetima i njegovim zaposlenima.</h5>
      <Link to="/">
      <button className="btn btn-outline-primary" id="button-pretraga">Nazad na first page</button>
      </Link>
      <IPAdresa/>
    </div>
  )
}

export default AboutUs
