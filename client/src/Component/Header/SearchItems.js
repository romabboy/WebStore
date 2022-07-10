import React from 'react'
import { Link } from 'react-router-dom'
const URL = process.env.REACT_APP_URL_ALLITEMS;

export default function SearchItems({details, setFocus}) {



  return (
   <Link to={`/${details.type}/${details._id}`}>
     <div className="headerBottom__itemList itemList"  onClick={ e => setFocus(false)}>
        <div className="itemList__img">
            <img src={details.img} alt="" />
        </div>
        <div className="itemList__title">
            {details.title}
        </div>
        <div className="itemList__price">
            {details.price}
        </div>
    </div>
   </Link>

  )
}
