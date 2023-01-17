import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineSchool} from 'react-icons/md'

function NavBar({indicate}) {
  return (
    <div className='topnav'>
      <Link to="/" className="active" > <MdOutlineSchool/></Link>
      <Link to="/" className="active" >First Page</Link>
      {indicate==true ? (<Link to="/search" className="active" >Search</Link>) 
      :
      (<Link to="/" className="active" >Searching</Link>)
  }
    </div>
  )
}

export default NavBar
