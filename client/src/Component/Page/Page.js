import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { ContextBagAndLike } from '../../Conetxt/ContextBagAndLike';
import useGetItemsFromServer from '../../hook/useGetItemsFromServer';
import Filter from '../Filter/Filter';
import Loading from '../Loading';
import Card from '../Main/salesHits/Card';
import Pagination from '../Pagitnation/Pagination';
const URL = process.env.REACT_APP_URL_ALLITEMS;

export default function Page() {
    const location = useLocation().pathname;
    const [items, setItem] = useGetItemsFromServer(`${URL}/${location}`, location);
    const {bag, setBag, setLike} = useContext(ContextBagAndLike);
    const [type, setType] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const lastItemsIndex = currentPage*itemsPerPage;
    const firstItemsIndex = lastItemsIndex-itemsPerPage;

    const changePage = (number) => {
      setCurrentPage(number)
    }

    useEffect(()=>{
      if(!items.length) return;

      setType(items[0].type);
    },[items])
    
    console.log("ITEM ", items)

  return (
    <div className="page container">
        <div className="page__filter">
            {
              type && <Filter setItem={setItem} type={type} />
            }
        </div>
        <div className="page__items">
          {
              (items.length === 0 && !type)
              ? <Loading />
              : items.slice(firstItemsIndex,lastItemsIndex).map( (item, index) => <Card key= { index } setLike={setLike} setBag={setBag} bag={bag} details = { item } />)
          }
          {                          
            (items.length === 0 && type) 
              && <div className="page__notItems">Not items</div>
          }
                 
        </div>
        <Pagination countItems={items.length} itemsOnPage={itemsPerPage} changePage={changePage}/>
    </div>
  )
}
