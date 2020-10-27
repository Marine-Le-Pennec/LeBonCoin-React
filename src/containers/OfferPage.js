import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

const OfferPage = () => {


    // const fetchData = async ()=>{
    //     const response = await axios.get
    // }
    const {id}=useParams()
    // console.log(id);

    return (
        <div>
            {id}
        </div>
    )
}

export default OfferPage
