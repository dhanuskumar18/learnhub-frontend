import React from 'react'
import "../../src/App.css";

import { Link } from 'react-router'
function Header() {
  return (
    <header>
        <div className='flex'>
        <Link to="/"className='heading' onClick={()=>{window.scrollTo(0,0)}} >LearnHub</Link>
        <Link className='admin' to="/form">Admin</Link>

        </div>
    </header>
  )
}

export default Header
