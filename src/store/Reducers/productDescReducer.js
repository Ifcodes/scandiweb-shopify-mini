import { defaultState } from "."

export const productDesc = (state = defaultState.singleProduct, action) => {
  switch(action.type){
    case 'SHOW_PRODUCT_DESC':
      let newState = {...state}
      defaultState.productList.map((item, indx) => {
        if(item.productId === action.id){
          newState = item
        }
       return item
      })
      return newState;
    default:
      return state;
  }
}

