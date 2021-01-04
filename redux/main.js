const { act } = require("react-dom/test-utils");
const DEFAULT_STATE={user:{},contact:[]}
class Store
{
    constructor(reducer,initialstate={}) {
        this.state=initialstate;
        this.reducer=reducer;
    }
    getState()
    {
        return this.state;
    }
    dispatch(update)
    {
        this.state= this.reducer(this.state,update);
    }

}
const merge=(prev,next)=>Object.assign({},prev,next);

const contactReducer=(state,action)=>
{
    switch(action.type)
    {
        case UPDATE_CONTACT:
            return [...state,action.payload];
        default:
            return state;
    }
}
const userReducer=(state,action)=>{
    switch(action.type)
    {
        case UPDATE_USER: return merge(state,action.payload);
        case UPDATE_CONTACT: return merge(state,{prev:action.payload});
        default:
            return state;
    }
}
const reducer=(state,action)=>({
    user:userReducer(state.user,action),
    contact:contactReducer(state.contact,action)
})

const updateUser=(update)=>({type:UPDATE_USER,payload:update});
const addContact=(newContact)=>({type:UPDATE_CONTACT,payload:newContact});
const UPDATE_CONTACT="UPDATE_CONTACT";
const UPDATE_USER="UPDATE_USER";
var store=new Store(reducer,DEFAULT_STATE);
store.dispatch(updateUser({"name":"satyam","class":12}));
store.dispatch(updateUser({"name":"shivam","class":12,login:true}));
store.dispatch(addContact({"name":"satyam","number":9165180194}));
store.dispatch(addContact({"name":"rajendra kumar tamrakar","number":9575995051}));
console.log(store.getState())