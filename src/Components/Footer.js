import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-content'>
                <img src='../Avtar.png' />
                <div>
                    <div className='nav-items'>
                        <NavLink to={"/"} className="nav-links">Home</NavLink>
                        <NavLink to={"/TodoApp"} className="nav-links">TodoApp</NavLink>
                        <NavLink to={"/About"} className="nav-links">About</NavLink>
                        <NavLink to={"Fotter"} className="nav-links">Fotter</NavLink>
                    </div>
                </div>
                <h3>TODOAPP @2023 Software</h3>
            </div> 
        </div>
    )
}

export default Footer