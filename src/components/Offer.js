import React from 'react'
import "../assets/css/Offer.css"
import {Link} from "react-router-dom";



const Offer = ({offer}) => {

    //UTC to local date 
    const date = new Date(offer.created).toLocaleDateString()
    let id=offer._id;
    return (
        <Link to={`/offer/${id}`} className="Link">
        <section className="offer-container">
            <div className="image-container">
            <img src={offer.picture.secure_url} alt="objet ou service"/>
            </div>
            
            <div className="infos-container">
                <div className="title-price-container">
                    <p>{offer.title}</p>
                    <p style={{color:"#F56B2A"}}>{offer.price} €</p>
                </div>
                <span>{date}</span>
            </div>
            
        </section>
        </Link>
       
    )
}

export default Offer
