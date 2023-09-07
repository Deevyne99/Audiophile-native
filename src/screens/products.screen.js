import React from 'react'
import { View, Text } from 'react-native'
import { SingleProduct } from '../components/SingleProduct'
// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

export const Products = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      {/* <Text>Products page</Text> */}
      <SingleProduct />
    </View>
  )
}
