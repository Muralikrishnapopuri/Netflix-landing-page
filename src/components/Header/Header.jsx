import React from 'react'
import logo from '../../assets/images/netflix-logo.png'
import './Header.css';
function Header() {
  return (
    <>
    <header>
        <nav style={{display:"flex",flexDirection:"row",justifyContent:'space-between',alignContent:"center",padding:"0.8rem"}}>
            <div className='Logo'>
                <img src={logo} width="130px" style={{paddingLeft:"2rem"}} alt="" />
            </div>
            <div className='nav-items' style={{paddingRight:"2rem"}}>
                <span style={{color:"white"}}>UNLIMITED TV SHOWS & MOVIES</span>
                <button id='btn-1'>Join now</button>
                <button id="btn-2">Sign Out</button>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header