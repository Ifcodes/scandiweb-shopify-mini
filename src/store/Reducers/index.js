import { combineReducers } from "redux"
import { updateCartItemQty } from "./updateCartItemQty"
import { totalAmount } from "./totalAmount"
import { productDesc } from "./productDescReducer"
import { categoryNames } from "./productCategory"
import { cartItemList } from "./data/cartItemList"
import { selectCategory } from "./selectedCategory"
import { currencyReducer } from "./selectedCurrency"

export const defaultState = {
  cartList: cartItemList,
  categories: [],
  totalAmount: 0,
  selectedProduct: {},
  selectedCategory : "all",
  selectedCurrency:  '$',
 
}


const rootReducer = combineReducers({
  updateCartItemQty,
  totalAmount,
  productDesc,
  categoryNames,
  selectCategory,
  currencyReducer,
})

export default rootReducer