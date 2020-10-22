import React from 'react'
import "../assets/css/App.css"
import "../assets/css/Header.css"


// Logo 
import logo from "../assets/img/1280px-Leboncoin.fr_Logo_2016.sv.png"
import plusSquare from "../assets/img/plus-square.svg"

const Header = () => {
    return (
        <>
        <div className="header-container">
            <img src={logo} alt="le boncoin"/>
            <button className="add-button">
            <img src={plusSquare} alt="ajouter annonce" className="plus-square"/>
            <p>Déposer une annonce</p>
            </button>
        </div>
       <div className="ellipse"></div>
        </>
    )
}

export default Header
