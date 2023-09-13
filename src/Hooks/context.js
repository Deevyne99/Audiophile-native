import React, { createContext, useContext, useReducer } from 'react'
import { View } from 'react-native'
import { products } from '../../data'
import { reducer } from './reducer'
const initialState = {
  allProducts: products,
}
const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
