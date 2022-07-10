import React, { useContext, useState } from 'react'
import { ContextBagAndLike } from '../../../Conetxt/ContextBagAndLike';
import useGetItemsFromServer from '../../../hook/useGetItemsFromServer'
import Loading from '../../Loading';
import Card from './Card';
const URL = process.env.REACT_APP_URL_SALESHITS;



export default function CardsArea() {

    const [items, setItems] = useGetItemsFromServer(URL);
    const {bag, setBag, setLike} = useContext(ContextBagAndLike)
    

  return (
    <div className="cardsArea">
        {items.length === 0 
        ? <Loading /> 
        : items.map( (item, index) => <Card key= { index } setLike={setLike} setBag={setBag} bag={bag} details = { item } />)}
    </div>
    ) 
}
