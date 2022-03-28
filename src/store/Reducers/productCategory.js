import { defaultState } from ".";

export const productCategory = (state = defaultState.productList, action) =>{
  switch(action.type){
    case 'WOMEN_CATEGORY':
      const newState = [...state]
      return newState;
    default: 
      return state;
  }
}