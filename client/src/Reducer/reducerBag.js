export function reducerBag(state, action){
    let arr;

    switch(action.type){
        
        case "addItems":
            arr = [...state, action.payload];
            arr = minimizeArr(arr);
            
            window.localStorage.setItem("bag",JSON.stringify(arr));

            return arr;
        
        case "removeItems":
            arr = [...state].filter( item => item._id !== action.id);
            
            window.localStorage.setItem("bag",JSON.stringify(arr));

            return arr;
        }


} 

function minimizeArr(arr){
    let obj = {};

    for(let i = 0; i < arr.length; i++){
        obj[arr[i]._id] = arr[i];
    }

    return Object.values(obj);
}