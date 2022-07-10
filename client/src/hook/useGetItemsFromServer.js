import { useEffect, useState } from "react";

function getAllItems(url, setState){
    return fetch(url)
        .then( data => data.json() )
        .then( json => setState(json) )
        .catch( e => console.error(e.message))
    }

    

export default function useGetItemsFromServer(url, pathname = null){
    let arr = pathname ? [pathname] : [];   
    const [state, setState] = useState([]);


    useEffect( ()=>{
       
        getAllItems(url, setState)
    },arr);

    

    return [state,setState];
}
