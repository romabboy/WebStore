export function reducerFilter(state, action){
    let obj;
    let arr = [];

    switch(action.type){
        case "addCheckbox":
            let key = `characteristics.${action.key}`;
            let value = action.value;
            let checked = action.checked;


                
            if(state[key]){
                arr = [...state[key], value];
            }else{
                arr = [value];
            }

            if(!checked){
                arr = arr.filter( item => item !== value); 
            }
         
            obj = {...state, [key]: arr};
            
            console.log("OBJ ", obj)
            if(!obj[key].length){
                delete obj[key]
            }
            
            return obj;
        case "addArray":
        
        return {...state, [action.key]: action.value};

        case "update":
            return {...state, ...action.update};
    }
}