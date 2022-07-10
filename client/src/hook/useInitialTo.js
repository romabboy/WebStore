import { useLocation } from "react-router-dom";

export function useInitalTo(){
    const location = useLocation();
    let TO = "";
    
    switch(location.pathname){
        case "/":
            TO = process.env.REACT_APP_LINK_SALESHITS;
            return
       
    }
}