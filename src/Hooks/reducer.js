export const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, product, amount } = action.payload
    const tempProduct = state.cart.find((item) => item.id === id)
    if (tempProduct) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id,
        name: product.name,
        price: product.price,
        img: product.img,
        amount,
      }
      // console.log(newItem)
      return {
        ...state,
        cart: [...state.cart, newItem],
      }
    }
  }
  if (action.type === 'CLEAR_CART_ITEMS') {
    return { ...state, cart: [] }
  }
  if (action.type === 'COUNT_CART_TOTAL') {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        console.log(amount)
        total.total_items += amount
        total.total_amount += price * amount
        return total
      },
      { total_amount: 0, total_items: 0 }
    )
    return { ...state, total_items, total_amount }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}
