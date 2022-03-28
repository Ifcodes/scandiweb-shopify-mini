
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

const womenCategory = () => ({
  type: 'WOMEN_CATEGORY'
})

const showDescription = (id) => ({
  id,
  type: 'SHOW_PRODUCT_DESC'
})

const allActions = {
  increment,
  minus,
  total,
  addToCart,
  womenCategory,
  showDescription
}

export default allActions