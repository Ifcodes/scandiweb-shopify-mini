import { defaultState } from "."

export const productDesc = (state = defaultState.selectedProduct, action) => {
  switch(action.type){
    case 'SHOW_PRODUCT_DESC':
      let newState = {...defaultState, selectedProduct: action.payload.product}
      const result = newState.selectedProduct
      return result;
    default:
      return state;
  }
}

