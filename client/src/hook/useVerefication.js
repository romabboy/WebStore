import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export function useVerefication(){
    const [login] = useOutletContext();
    const navigation = useNavigate();


  



    useEffect(()=>{
        if(!login){
            navigation("/admin")
        }
    },[])


}