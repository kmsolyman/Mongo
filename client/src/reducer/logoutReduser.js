export const initialState =null;

export const reduser =(state,action)=>{
  if(action.type=="USER"){
    return action.payload;
  }
  return state;
}