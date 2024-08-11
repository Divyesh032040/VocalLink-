/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation() {
    const brandStyle = {
        color:"#fff",
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'22px',
        display:'flex',
        alignItem:'center',
        
    }
    const logoStyle = {
        marginLeft : '10px'
    }
  return (
    <nav className={`${styles.navbar} , container`}>
        <Link style={brandStyle} to='/'>
            <img className='hand-logo' src="/Public/Images/Logo.png" alt="Logo" />
            <span style={logoStyle}>VocalLink</span>
        </Link>
    </nav>
  )
}

export default Navigation