import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import styled from 'styled-components/native'
import { useGlobalContext } from '../Hooks/context'
import { NameText } from '../components/SingleProduct'
import { formatPrice } from '../utils/Price'
import {
  Button,
  ButtonWrapper,
  ButtonLabel,
  AmountLabel,
} from './ProductDetails.screen'
import { useNavigation } from '@react-navigation/native'

export const Cart = () => {
  const {
    allProducts,
    cart,
    total_items,
    clearCartItems,
    increaseCart,
    decreaseCart,
  } = useGlobalContext()
  const navigation = useNavigation()

  if (cart.length < 1) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          You cart is empty, click the button below to add items to your cart.
        </Text>
        <Checkout onPress={() => navigation.navigate('Products')}>
          <CheckoutLabel>See products</CheckoutLabel>
        </Checkout>
      </View>
    )
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <CartWrapper>
        <Header>
          <Title>Cart ({total_items})</Title>
          <RemoveButton onPress={clearCartItems}>
            <RemoveLabel>Remove all</RemoveLabel>
          </RemoveButton>
        </Header>
        {cart.map((items) => {
          const { img, name, price, id, amount } = items
          return (
            <CartContent key={id}>
              <ProductImageContainer>
                <ProductImage source={img}></ProductImage>
              </ProductImageContainer>
              <Labels>
                <NameLabel>{name}</NameLabel>
                <NameLabel>{formatPrice(price)}</NameLabel>
              </Labels>
              <ButtonWrapper>
                <Button onPress={() => decreaseCart(id)}>
                  <ButtonLabel>-</ButtonLabel>
                </Button>
                <AmountLabel>{amount}</AmountLabel>
                <Button onPress={() => increaseCart(id)}>
                  <ButtonLabel>+</ButtonLabel>
                </Button>
              </ButtonWrapper>
            </CartContent>
          )
        })}
        <Checkout onPress={() => navigation.navigate('Checkout')}>
          <CheckoutLabel>Checkout</CheckoutLabel>
        </Checkout>
      </CartWrapper>
    </ScrollView>
  )
}

export const CartWrapper = styled(View)`
  /* flex: 1; */
  padding: 16px;
  background-color: #fff;
`
export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`
export const Title = styled(Text)`
  color: #000;
  font-weight: bold;
`
export const RemoveButton = styled(TouchableOpacity)``
export const RemoveLabel = styled(Text)`
  color: #000;
  opacity: 0.5;
`
export const CartContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
  /* gap: 20px; */
`
export const ProductImageContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.gray};
  padding: 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: cneter;
`
export const ProductImage = styled(Image)`
  width: 70px;
  height: 70px;
`
export const NameLabel = styled(Text)`
  width: 120px;
`
export const Labels = styled(View)`
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`
export const Checkout = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.orange};
  padding: 10px;
  width: 130px;
  margin: 0 auto;
  margin-top: 30px;
`
export const CheckoutLabel = styled(Text)`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`
