import React from 'react'
import "../assets/css/App.css"
import "../assets/css/Header.css"



// Logo 
import logo from "../assets/img/1280px-Leboncoin.fr_Logo_2016.sv.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return (
        <>
    <div className="header-container">
        <section className="left-part-header">
         <img src={logo} alt="le boncoin"/>
          <button className="add-button">
           <FontAwesomeIcon icon="plus-square" size="lg"/>
           <p>Déposer une annonce</p>
          </button>
            <div className="search-input">
             <FontAwesomeIcon icon="search" className="search-icon"/>
             <input/>
            </div>
        </section>
        <section className="right-part-header">
            <button className="connection-button">
            <FontAwesomeIcon icon="user" className="user-icon"/>
            <p>Se connecter</p>
            </button>
        
        </section>
           
    </div>
       <div className="ellipse"></div>
        </>
    )
}

export default Header
