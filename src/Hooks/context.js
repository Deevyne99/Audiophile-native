import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import { View } from 'react-native'
import { products } from '../../data'
import { reducer } from './reducer'
const initialState = {
  allProducts: products,
  total_items: 0,
  total_amount: 0,
  shipping_fee: 50,
  cart: [],
}
const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [amount, setAmount] = useState(1)
  const increaseAmount = () => {
    setAmount((oldAmount) => oldAmount + 1)
  }
  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (oldAmount === 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  const AddToCart = (id, product, amount) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, product, amount } })
    setAmount(1)
  }

  const clearCartItems = () => {
    dispatch({ type: 'CLEAR_CART_ITEMS' })
  }
  useEffect(() => {
    dispatch({ type: 'COUNT_CART_TOTAL' })
    //  localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        increaseAmount,
        decreaseAmount,
        AddToCart,
        amount,
        clearCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
