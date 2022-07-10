import React, { useEffect, useRef, useState } from 'react';
import useSearchItems from '../../hook/useSearchItems';
import SearchItems from './SearchItems';
const URL = process.env.REACT_APP_URL_SEARCH;


export default function Search() {
    const [input, setInput, items] = useSearchItems(URL);
    const [focus, setFocus] = useState(false); 
    const ref = useRef();
    

    //don't look here)
   useEffect(() => {

    let removeFocus = event => {
      if(!event.target.closest(`.${ref.current.className}`)){
        console.log("CLICK")
        setFocus(false)
      }
    }
    
    document.body.addEventListener("click", removeFocus)

    return () => {
      console.log("DELETE ADDEVENT")
      document.body.removeEventListener("click", removeFocus);
    }
   }, [])

    const SearchItemList = () => {
      if(items){
        if(items.length){
          return items.map( (item, index) => <SearchItems key={index} setFocus={setFocus} details={item}/> );
        }else{
          return <p>Нічого не знайдено</p>
        }
      }else{
        return <p>введіть щось</p>
      }
    }


    console.log("ITEMS ", items)
    
  return (
    <div className="headerBottom__search" ref={ref}>
      <input type="text"  onFocus={e => setFocus(true)} value={input} onChange={e => setInput(e.target.value)} className="headerBottom__input" />
      {
        focus 
        && <div className="headerBottom__searchList" >
          {
           <SearchItemList />
          }
        </div>
      }
    </div>
  
  )
}
