import { defaultState } from ".";

export const selectCategory = (state = defaultState.selectedCategory, action) =>{
  switch(action.type){
    case 'SELECT_CATEGORY':
      let newState = state
      newState = action.payload.tab
      return newState
    default:
      return state
  }
}
