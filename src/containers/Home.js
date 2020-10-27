import React,{useState,useEffect} from 'react'
import "../assets/css/Home.css"
import axios from "axios"

// Composants
import SearchBox from "../components/SearchBox"
import Offer from "../components/Offer"

const Home = () => {

    // State
    const [isLoading, setIsLoading] = useState(true)
    const [offers, setOffers] = useState()
  
    // Récupération des annonces
    const fetchData = async ()=>{
        const response = await axios.get("https://leboncoin-api-marine.herokuapp.com/offer/with-count")
        setOffers(response.data)
        setIsLoading(false)
    };
  
    useEffect(()=>{
        fetchData();
    },[])

    return isLoading? <div>chargement</div>:(
        <div className="home-container">
            <SearchBox/>
            <main className="offers-container">
                {offers.offers.map((offer,i)=>{
                    return <Offer offer={offer} key={i}/>
                })}
            </main>
        </div>
    )
}

export default Home
