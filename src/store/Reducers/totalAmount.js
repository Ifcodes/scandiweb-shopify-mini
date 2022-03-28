import { defaultState } from "."

export const totalAmount = (state = defaultState.totalAmount, action) => {
  switch(action.type) {
    case 'TOTAL': 
      const totalValue = defaultState.cartList.reduce((prev, current) => ({
        total: prev.total + current.total
      }))

      const result = {...defaultState, totalAmount: totalValue.total}

      const amount = result.totalAmount

      return amount
    default:
      return state;
  }
}