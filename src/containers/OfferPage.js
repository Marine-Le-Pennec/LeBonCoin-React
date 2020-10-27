import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "../assets/css/OfferPage.css"

const OfferPage = () => {

    const {id} = useParams()

    const [offerData, setOfferData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async ()=>{
        const response = await axios.get(`https://leboncoin-api-marine.herokuapp.com/offer/`+id)
        setOfferData(response.data)
        setIsLoading(false)
        console.log(response.data);
    }
    useEffect(()=>{
        fetchData()
    },[id])

    return isLoading ? <div>chargement</div> : (
        <main className="offerpage-container">
            <section className="offer-infos-container">
                <div className="recap-container">
                    <div className="image-offer-container">
                        <img src={offerData.picture.secure_url}/>
                    </div>
                    <div className="main-info-container">
                        <div className="title-price-offer-container">
                            <h2>{offerData.title}</h2>
                            <p style={{color:"#F56B2A"}}>{offerData.price} €</p>
                        </div>
                        <div className="date-offer-container">
                            <p>{new Date(offerData.created).toLocaleDateString()}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="description-offer-container">
                    <h3>Description</h3>
                    <p>{offerData.description}</p>
                </div>
            </section>
            <section className="right-part-container">
                <div className="seller-infos-container">
                    <div className="seller-infos">
                        <h2>{offerData.creator.username}</h2>
                        <p>17 annonces en ligne</p>
                    </div>
                    <div className="buy-button-container">
                        <button className="buy-button">
                        <FontAwesomeIcon icon="shopping-cart" size="lg"/>
                        <span>Acheter</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OfferPage
