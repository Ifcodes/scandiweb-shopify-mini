import { defaultState } from ".";

export const categoryNames = (state = defaultState.categories, action) =>{
  switch(action.type){
    case 'CATEGORIES':
      const newState =  {...defaultState, categories: action.payload.categories}

      const result = newState.categories

      return result;
    default: 
      return state;
  }
}