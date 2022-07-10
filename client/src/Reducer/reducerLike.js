export function reducerLike(state, action){
    let arr;

    switch(action.type){
            case "addLike":
                arr = [...state, action.payload];
                arr = minimizeArr(arr);
                
                window.localStorage.setItem("like", JSON.stringify(arr));

                return arr;

            case "removeLike": 
                arr = [...state].filter( item => item._id !== action.id);
                
                window.localStorage.setItem("like", JSON.stringify(arr));
                
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