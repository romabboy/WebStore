export const reducerBanner = (state, action) => {
    let index = state.index;

    switch(action.type){
        case "left":
            index -= 1;
            index = index < 0 ? state.length-1 : index;
            return {...state, index:index};
        
        case "right":
            index += 1;
            index = index > state.length - 1 ? 0 : index;
            return {...state, index};
                    
    }    
}