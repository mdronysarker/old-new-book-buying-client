import { createContext, useReducer } from "react";

const BookContext = createContext();

const initialState = {
    category:null,
    page:1,
    type:null,
    perPage:12
};

const Reducer = (state,action)=>{
   switch(action.type){
    case 'SET_CATEGORY':
        return {...state,category:action.payload};
    case 'SET_PAGE':
        return {...state,page:action.payload};
    case 'SET_TYPE':
        return {...state,type:action.payload};
    case 'SET_PER_PAGE':
        return {...state,perPage:action.payload};
    default:
        return state;
    }
}

const BookProvider = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,initialState);
    return(
        <BookContext.Provider value={{state,dispatch}}>
            {children}
        </BookContext.Provider>
    )
}

export {BookProvider,BookContext};