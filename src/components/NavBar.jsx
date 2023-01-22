import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineSchool} from 'react-icons/md'
import {IoHandRightOutline} from 'react-icons/io5'


function NavBar({studenti,indicate}) {
  return (
    <div className='topnav'>
      <Link to="/" className="active" > <MdOutlineSchool/></Link>
      <Link to="/" className="active" >First Page</Link>
      {indicate==true ? (<Link to="/search" 
       state= {{
        studenti:studenti,
      }}
      className="active" >Search</Link>) 
      :
      (<Link to="/" className="active" >Searching</Link>)
  }
  <Link to="/about" className="active" > About us<IoHandRightOutline/></Link>
    </div>
    
  )
}

export default NavBar
