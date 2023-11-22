import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
        <Link to="/"> 
        <div className='nav'> Main page 🐾</div>
        
        </Link>
        <Link to="/CatImg">
            <div className='cat'> Cat API 🐾</div>
        </Link>    
     
    
    </div>
  )
}

export default Nav