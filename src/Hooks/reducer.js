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

  throw new Error(`No Matching "${action.type}" - action type`)
}
