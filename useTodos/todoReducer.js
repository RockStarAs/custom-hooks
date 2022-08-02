

export const todoReducer = (initialState = [], action)=>{
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState , action.payload ];
            
            throw new Error(`${action.type} no está implementada`);
        break;
        case '[TODO] Remove Todo':
            //*Para eliminar {type: [TODO remove], payload: id}
            return initialState.filter((element)=> {if(element.id !== action.payload) return element;})
        break;
        case '[TODO] Toggle Todo':
            //*Para eliminar {type: [TODO remove], payload: id}
            return initialState.map((element)=> 
            {
                if(element.id === action.payload){
                    return {
                        ...element,
                        done: !element.done
                    }
                }
                return element;
            });
        break;
    
        default:
            return initialState;
        break;
    }
}