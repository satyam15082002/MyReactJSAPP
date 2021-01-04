
//action types 
export const UPDATE_CONTACT="UPDATE_CONTACT";
export const UPDATE_USER="UPDATE_USER";


//action creators
export const updateUser=(update)=>({type:UPDATE_USER,payload:update});
export const addContact=(newContact)=>({type:UPDATE_CONTACT,payload:newContact});
