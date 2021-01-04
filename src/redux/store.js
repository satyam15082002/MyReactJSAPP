
import { createStore} from "redux";
import reducer  from "./reducer";

const store=new createStore(reducer);
/*
store.dispatch(updateUser({"name":"satyam","class":12}));
store.dispatch(updateUser({"name":"shivam","class":12,login:true}));
store.dispatch(addContact({"name":"satyam","number":9165180194}));
store.dispatch(addContact({"name":"rajendra kumar tamrakar","number":9575995051}));
console.log(store.getState())
*/
export default store;
