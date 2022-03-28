import { combineReducers } from "redux"
import { updateCartItemQty } from "./updateCartItemQty"
import { totalAmount } from "./totalAmount"
import { productDesc } from "./productDescReducer"
import { productCategory } from "./productCategory"
import { cartItemList } from "./data/cartItemList"
import { productList } from "./data/productList"

export const defaultState = {
  cartList: cartItemList,
  productList: productList,
  totalAmount: 0,
  singleProduct: {},
}


const rootReducer = combineReducers({
  updateCartItemQty,
  totalAmount,
  productDesc,
  productCategory,
})

export default rootReducer