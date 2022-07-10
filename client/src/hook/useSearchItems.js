import { useEffect, useState} from "react"


function getSearchItems(url, input, setItem){
    console.log("VALIDATIONINPUT: ", `"${input}"`)

    return fetch(url,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify({search: input})
    })
        .then( data => data.json() )
        .then( json => setItem(json) )
        .catch( e => console.error(e.message))
}
  
function FuncValidationInput(str){
    let arrSymbol =`!@#$%^&*()-=_+[]{}"\`;:/.,<>?|~`.split("");
    let arrStr = str.split("");


    arrStr = arrStr.filter( char => {
        let validation = true;
       
        for(let i = 0; i < arrSymbol.length; i++){ 
            if(char === arrSymbol[i] || char === "\\"){
         
                validation = false;
                break;                
            }
        }

        return validation;
    })


    return arrStr.join("");
}

export default function useSearchItems(url) {
    const [input,setInput] = useState("");
    const [item, setItem] = useState(null);
    const validationInput = FuncValidationInput(input);
    

    console.log("VALIDATIONINPUT: ", `"${validationInput.trim()}"`)

    useEffect(()=>{
        if(validationInput.trim() === "") {
            if(item){
                
                setItem(null);
            }
            return
        };

        getSearchItems(url, validationInput.trim(), setItem)
                
    },[input])

    return [input, setInput, item];
}
