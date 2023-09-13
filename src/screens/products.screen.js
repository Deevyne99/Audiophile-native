// import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { SingleProduct } from '../components/SingleProduct'
import { products, shop } from '../../data'
import { Shop } from '../components/Shop'
import { ShopContainer } from './Home.screen'
import { useGlobalContext } from '../Hooks/context'

// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

export const Products = ({ navigation }) => {
  const { allProducts } = useGlobalContext()
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      {/* <Text>Products page</Text> */}
      <FlatList
        data={allProducts}
        renderItem={({ item, index }) => (
          <SingleProduct item={item} key={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
