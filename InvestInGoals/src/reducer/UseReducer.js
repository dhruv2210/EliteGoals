export const initialState=null;
export const UseReducer=(state,action)=>{
    if(action.type==="USER"){
        return action.payload;
    }
    return state;
}