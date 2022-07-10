import React from 'react'

export default function CardItemImg({item}) {
  return (
    <div className="cardItem__img">
            <div className="cardItem__mainImg">
                <img src={item.img} alt="" />
            </div>
            <div className="cardItem__additiionalImg">
                <button className="cardItem__buttonLeft">{"<"}</button>
                <button className="cardItem__buttonRight">{">"}</button>
                {item.additionalPictures.map( (item, index) => <img key={index} src={item}/>)}
            </div>
        </div>

  )
}
