import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { ContextBagAndLike } from "../Conetxt/ContextBagAndLike";

export function useCardItem(URL){
    let type = useLocation().pathname;
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [likeActive, setLikeActive] = useState(false);
    const {like, setLike} = useContext(ContextBagAndLike);
    const navigate = useNavigate();
    
    type = type.split("/")[1];


    useEffect( ()=>{      
        fetch(`${URL}/${type}/${id}`)
          .then( data => data.json())          
          .then( json => {

            if(json.notFound){
              navigate(process.env.REACT_APP_LINK_NOTFOUND);
            }
            
            like.forEach( itemFromLikeLocalStorage => {
             
              if(itemFromLikeLocalStorage._id === json._id){
                setLikeActive(true);
              }
              
            });
            setItem(json)
          })
          .catch( error => {
            console.error(error.message);
          })
         
    },[])

    return {item, likeActive, setLikeActive, setLike, setItem}
}