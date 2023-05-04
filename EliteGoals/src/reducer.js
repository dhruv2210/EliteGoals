export const initialState = {
    basket: [],
    goal:[],
    order:[],
    ph:0,
   
  };
  
  
  const reducer = (state, action) => {
    console.log("action >>>>", action);
  
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [action.item],
        };
      case "ADD_TO_PHONE":
          return {
            ph: action.item,
          };
        case "ADD_TO_GOAL":
          return {
            ...state,
            goal: [...state.goal, action.item],
          };
        case "ADD_TO_ORDER":
          return {
            ...state,
            order: [action.item],
          };
      
      case "REMOVE_FROM_GOAL":
        const index = state.goal.findIndex(
          (basketItem) => basketItem.id === action.id
        );
  
        let newBasket = [...state.goal];

        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(`
            can't remove product whose id is ${index}
            `);
        }
  
        return {
          ...state,
          goal: newBasket,
        };

      default:
        return state;
    }
  };
  
  export default reducer;
  