import { combineReducers } from "redux";
import { UPDATE_CONTACT,UPDATE_USER }  from"./action";

const merge=(prev,next)=>Object.assign({},prev,next);

const contactReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case UPDATE_CONTACT:
            return [...state,action.payload];
        default:
            return state;
    }
}
const userReducer=(state={},action)=>{
    switch(action.type)
    {
        case UPDATE_USER: return merge(state,action.payload);
        case UPDATE_CONTACT: return merge(state,{prev:action.payload});
        default:
            return state;
    }
}
const reducer=combineReducers({
    user:userReducer,
    contact:contactReducer
});

export  default reducer;
