import { defaultState } from "."

export const updateCartItemQty = (state = defaultState.cartList, action) => {
  const newState = [...state]
  switch(action.type){
    case 'ADD_TO_CART':
      const productInCart = newState.find((product) => product.id === action.data.id)

      if(productInCart) {
        const updatedCart = newState.map((item) => {
          if(item.id === productInCart.id) {
            item.quantity += 1
            item.selectedOptions = item.availableSizes.concat(action.data.selectedSize)
          }
          return item
        })

        return updatedCart
      }else{
        const updatedCart = newState.concat(action.data)
       
        return updatedCart
      }
    case 'INCREMENT': 
      const newQty = newState.map((item, index) => {
        if(item.productId === action.id){
          item.quantity = item.quantity + 1
          item.total = item.total + item.price
        }
        return item;
      })

      return newQty
    case 'MINUS':
      const updatedQty = newState.map((item, index) => {
        if(item.productId === action.id){
          item.quantity = item.quantity - 1
          item.total = item.total - item.price
        }
        return item;
      })

      return updatedQty
    default: 
      return state;
  }
   
}