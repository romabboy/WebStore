import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ContextBagAndLike } from '../../Conetxt/ContextBagAndLike';
import { useCardItem } from '../../hook/useCardItem';
import Loading from '../Loading';
import CardItemImg from './CardItemImg';
import Rating from './Rating';
const URL = process.env.REACT_APP_URL_ALLITEMS;

export default function CardItem() {
    const {item, likeActive, setLikeActive, setLike, setItem} = useCardItem(URL)



    const clickLike = () => {
      setLikeActive(!likeActive);
      
      if(!likeActive){
          setLike({type: "addLike", payload: item});
      }else{
          setLike({type: "removeLike", id: item._id})
      }
      
  }
  
  if(!item){
    return (
      <div className="cardItem__loading container">
        <Loading />
      </div>  
    )
  }
    
  return (
    <div className="cardItem__container container">
      <div className="cardItem__path">

      </div>
      <div className="cardItem__first">
         <CardItemImg item={item}/>
         <Rating item={item} setItem={setItem}/>
         <h2 className="cardItem__title">
            {item.title} 
         </h2>
         <p className="cardItem__type">
          {item.type}
         </p>
         <div className="cardItem__row">
            <p className="cardItem__price">
              {item.price}
            </p>
            <button className="cardItem__button">Купити</button>
            <div className="cardItem__like" onClick={clickLike}>
              Добавити в улюблене
              {likeActive
              ? <AiFillHeart style={{color: "red"}}/>
              : <AiOutlineHeart />}
           
            </div>
         </div>
         <div className="cardItem__description">
              {item.description}
         </div>
      </div>
      <div className="cardItem__twice">
          <div className="cardItem__details">
              <NavLink className={"cardItem__link"} to={""}>Характеристики</NavLink>
              <NavLink className={"cardItem__link"} to={process.env.REACT_APP_LINK_REVIEWS}>Відгуки</NavLink>
              <NavLink className={"cardItem__link"} to={process.env.REACT_APP_LINK_DELIVERY}>Оплата і доставка</NavLink>
              <Outlet context={item}/>
          </div>            
      </div>
    </div>
  )
}
