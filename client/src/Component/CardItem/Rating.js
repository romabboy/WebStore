import React, { useEffect, useState } from 'react'
import {AiFillStar} from "react-icons/ai"
const URL = process.env.REACT_APP_URL_RAITING;

export default function Rating({item, setItem}) {
  const [selectedStar, setSelectedStar] = useState(0);
  const arrStar = new Array(5).fill("");

  useEffect(() => {
    fetch(`${URL}/${item._id}`)
      .then( data => data.json())
      .then( ({rate}) => {
      
        if(!rate) setSelectedStar(0);
        else setSelectedStar(rate);
        
      }
      )
  },[])

  const clickStar = (index) => {
    updateRaitngOnTheServer(`${URL}/${item._id}`, index);
    setSelectedStar(index);
    
  }

  return (
    <div>Rating
      {
        arrStar.map((item, index) => {
          return <Star 
          key={index} 
          selected={index < selectedStar} 
          onClick={() => clickStar(index+1)}
          />
        })
      }
    </div>
  )
}




function Star({selected = false, ...other}){
  return <AiFillStar {...other} color={selected ? "yellow" : "grey"} />
} 

async function updateRaitngOnTheServer(url, rate){
  const { ip } = await fetch('https://ipapi.co/json/').then(d => d.json())

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ip, rate})
  })
}