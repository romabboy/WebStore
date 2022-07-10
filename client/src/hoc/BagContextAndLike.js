import React, { useEffect, useReducer, useState } from 'react';
import { ContextBagAndLike } from '../Conetxt/ContextBagAndLike';
import { reducerBag } from '../Reducer/reducerBag';
import { reducerLike } from '../Reducer/reducerLike';


export default function BagContextAndLike({children}) {
  
  const [bag, setBag] = useReducer(reducerBag, JSON.parse(window.localStorage.getItem("bag")) || []);
  const [like, setLike] = useReducer(reducerLike, JSON.parse(window.localStorage.getItem("like")) || []);



  console.log("BAG: ",bag)
  console.log("LIKE" ,like)

  return (
    <ContextBagAndLike.Provider value={{ bag, setBag, like ,setLike}}>
        {children}
    </ContextBagAndLike.Provider>
  )
}
