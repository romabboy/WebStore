import React, { useContext, useEffect } from 'react'
import { ContextBagAndLike } from '../../Conetxt/ContextBagAndLike'
import BagCards from './BagCards';

export default function Bag() {
  const { bag, setBag } = useContext(ContextBagAndLike);


  return (
    <div className="bag__container container">
        <div className="bag__title">
            <h3>Ваша корзина</h3>
            <h3>{bag.length} items</h3>
        </div>
        <div className="bag__card">
            { bag.map( (item, index) => <BagCards key={index} setBag = {setBag} details={item} />) }
        </div>
    </div>
  )
}
