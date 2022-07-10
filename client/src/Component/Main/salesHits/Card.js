import React, { useState, useContext, useEffect } from 'react';
import { ContextBagAndLike } from '../../../Conetxt/ContextBagAndLike';
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { Link, useLocation } from 'react-router-dom';



export default function Card({details, setBag, bag, setLike}) {
    const [count, setCount] = useState(0);
    const [likeActive, setLikeActive] = useState(false);
    const location = useLocation();
    

    
   
    
   useEffect(() => {
        let arrLike = JSON.parse(window.localStorage.getItem("like"));
        arrLike.forEach( item => {
            if(item._id === details._id){
                setLikeActive(true)
            }
        });
   }, [])
    
    //Щоб не збивалась кількість в корзині
    useEffect(() => {
        bag.forEach(item => {
            if(item._id === details._id){
                setCount(item.amount);
            }
        });
    },[])

    
    
    const clickBuy = () => {  
        setBag({type:"addItems", payload: {...details, amount: count + 1}})
        setCount(count + 1)

    };
    
    const clickLike = () => {
        setLikeActive(!likeActive);
        
        if(!likeActive){
            setLike({type: "addLike", payload: details});
        }else{
            setLike({type: "removeLike", id: details._id})
        }
        
    }
   
  return (
    <div className="card" onMouseDown={e => e.preventDefault()}>
        <div className="card__like" onClick={clickLike}>
             {likeActive
             ? <AiFillHeart style={{color: "red"}}/>
             : <AiOutlineHeart />}
        </div>
        <Link to={`/${details.type}/${details._id}`}>
            <div className="card__img">
                <img src={details.img} alt="" />
            </div>
        </Link>
        <Link className="card__title" to={`/${details.type}/${details._id}`}>
            {details.title}            
        </Link>
        <p className="card__type">
            {details.type}
        </p>
        <p className="card__price">
            {details.price}
        </p>
        <button onClick={clickBuy} className="card__button">
            Buy
        </button>
    </div>
  )
}



