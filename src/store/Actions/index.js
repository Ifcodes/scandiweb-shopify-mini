
const increment = (id) => ({
    id,
    type: 'INCREMENT',
})

const minus = (id) => ({
  id,
  type: 'MINUS'
})

const total = () => ({
  type: 'TOTAL'
})

const addToCart = (newData) => ({
  data: newData,
  type: 'ADD_TO_CART'
})

const setSelectedCategory = (tab) => ({
  type: 'SELECT_CATEGORY',
  payload: {
    tab
  }
})
const setCategories = (categories) => ({
  type: 'CATEGORIES',
  payload: {
    categories
  }
})

const setCategoryName = (name) => ({
  type: 'CATEGORY',
  payload: {
    name
  }
})

const showDescription = (product) => ({
  type: 'SHOW_PRODUCT_DESC',
  payload: {
    product
  }
})

const setSelectedCurrency = (currency) => ({
  type: 'SELECTED_CURRENCY',
  payload: {
    currency
  }
})

const allActions = {
  increment,
  minus,
  total,
  addToCart,
  setCategories,
  setCategoryName,
  showDescription,
  setSelectedCategory,
  setSelectedCurrency
}

export default allActions