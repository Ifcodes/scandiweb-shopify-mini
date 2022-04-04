import { defaultState } from ".";

export const currencyReducer = (state = defaultState.selectedCurrency, action) => {
  switch(action.type){
    case 'SELECTED_CURRENCY':
      const newState = {...defaultState, selectedCurrency: action.payload.currency}
    
      return newState.selectedCurrency;
    default:
      return state;
  }
}