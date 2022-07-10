import React from 'react'

export default function BagCards({details, setBag}) {

    const removeItems = () => {
        setBag({type: "removeItems", id: details._id })
    }
    
  return (
    <div className="bagCards">
        <div className="bagCards__img">
            <img src={details.img} alt="" className="bagCards__img" />
        </div>
        <div className="bagCards__main">
            <div className="bagCards__title">
                <h3>
                    {details.title}
                </h3>
                <h3>
                    {details.price}
                </h3>
            </div>
            <div className="bagCards__description">
                <p>
                    type{details.type}
                </p>
                <p>
                    amount: {details.amount}
                </p>
            </div>
        </div>
        <button className="bagCards__remove" onClick={removeItems}>X</button>
    </div>
  )
}
