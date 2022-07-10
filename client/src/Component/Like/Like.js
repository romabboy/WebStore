import React, { useContext } from 'react'
import { ContextBagAndLike } from '../../Conetxt/ContextBagAndLike'
import Card from '../Main/salesHits/Card';


export default function Like() {
  
  const {like, setLike, setBag, bag} = useContext(ContextBagAndLike);

  return (
    <div className="like_container container">
        {like.map( (item, index) => <Card key= { index } setLike={setLike} setBag={setBag} bag={bag} details = { item } />)}
    </div>
    )
}
