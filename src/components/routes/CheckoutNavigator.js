import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Products } from '../../screens/Products.screen'
import ProductDetails from '../../screens/ProductDetails.screen'
import { CheckOut } from '../../screens/CheckOut.screen'

// import { Products } from '../../screens/products.screen'

// import { Product } from '../../screens/Product.screen'

const CheckoutStack = createStackNavigator()
export const CheckOutNavigator = () => {
  return (
    <CheckoutStack.Navigator>
      <CheckoutStack.Screen
        name='Checkout'
        component={CheckOut}
      ></CheckoutStack.Screen>
    </CheckoutStack.Navigator>
  )
}
