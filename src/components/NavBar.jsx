import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineSchool} from 'react-icons/md'

function NavBar() {
  return (
    <div className='topnav'>
      <Link to="/" className="active" > <MdOutlineSchool/></Link>
      <Link to="/" className="active" >First Page</Link>
      <Link to="/search" className="active" >Search</Link>
    </div>
  )
}

export default NavBar
