import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/Header.css'


const Header = () => {
  return (
    <div className='header'>
        <h2>TODOAPP</h2>
        <div className='nav-items'>
           <NavLink to={"/"} className="nav-links">Home</NavLink>
           <NavLink to={"/TodoApp"} className="nav-links">TodoApp</NavLink>
           <NavLink to={"/About"} className="nav-links">About</NavLink>
           <NavLink to={"/Fotter"} className="nav-links">Fotter</NavLink>
        </div>
    </div>
  )
}

export default Header