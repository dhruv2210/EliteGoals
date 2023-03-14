export const initialState = {
    basket: [],
    goal:[],
    ph:0,
    user: null,
    // user: JSON.parse(localStorage.getItem("user")),
    // address: {},
  };
  
  // export const getBasketTotal = (basket) =>
  //   basket.reduce((amount, item) => item.price + amount, 0);
  
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
  
      // case "SET_ADDRESS":
      //   return {
      //     ...state,
      //     address: { ...action.item },
      //   };
  
      // case "SET_USER":
      //   return {
      //     ...state,
      //     user: action.user,
      //   };
  
      // case "EMPTY_BASKET":
      //   return {
      //     ...state,
      //     basket: [],
      //   };


      default:
        return state;
    }
  };
  
  export default reducer;
  