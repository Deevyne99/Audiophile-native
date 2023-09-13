import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Products } from '../../screens/Products.screen'
import ProductDetails from '../../screens/ProductDetails.screen'
// import { Products } from '../../screens/products.screen'

// import { Product } from '../../screens/Product.screen'

const ProductStack = createStackNavigator()
export const ProductNavigator = () => {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name='Audiophile Products'
        component={Products}
      ></ProductStack.Screen>
      <ProductStack.Screen
        name='Details'
        component={ProductDetails}
        options={({ route }) => ({ title: route.params.item.name })}
      />
    </ProductStack.Navigator>
  )
}
