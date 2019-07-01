import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'
import './navbar.css'

const Navbar = () => {
    return (
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
    )
}

export default Navbar