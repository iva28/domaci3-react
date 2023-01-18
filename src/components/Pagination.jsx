import React from 'react'
import { Link } from 'react-router-dom'

function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example">
     <ul class="pagination justify-content-end">
     
      <li class="page-item" ><Link to="/"><button  className="btn btn-outline-primary" id="button-paginacija">HOME</button></Link></li>
      <li class="page-item"><Link to="/search"><button  className="btn btn-outline-primary" id="button-paginacija">SEARCH</button></Link></li>
      <li class="page-item"><Link to="/about"><button  className="btn btn-outline-primary" id="button-paginacija">ABOUT</button></Link></li>
       
  </ul>
</nav>
    </div>
  )
}

export default Pagination
