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

export const Cart = () => {
  const { allProducts, amount } = useGlobalContext()
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <CartWrapper>
        <Header>
          <Title>Cart (2)</Title>
          <RemoveButton>
            <RemoveLabel>Remove all</RemoveLabel>
          </RemoveButton>
        </Header>
        {allProducts.map((items) => {
          const { img, name, price, id } = items
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
                <Button>
                  <ButtonLabel>-</ButtonLabel>
                </Button>
                <AmountLabel>{amount}</AmountLabel>
                <Button>
                  <ButtonLabel>+</ButtonLabel>
                </Button>
              </ButtonWrapper>
            </CartContent>
          )
        })}
        <Checkout>
          <CheckoutLabel>Checkout</CheckoutLabel>
        </Checkout>
      </CartWrapper>
    </ScrollView>
  )
}

const CartWrapper = styled(View)`
  /* flex: 1; */
  padding: 16px;
  background-color: #fff;
`
const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`
const Title = styled(Text)`
  color: #000;
  font-weight: bold;
`
const RemoveButton = styled(TouchableOpacity)``
const RemoveLabel = styled(Text)`
  color: #000;
  opacity: 0.5;
`
const CartContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
  /* gap: 20px; */
`
const ProductImageContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.gray};
  padding: 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: cneter;
`
const ProductImage = styled(Image)`
  width: 70px;
  height: 70px;
`
const NameLabel = styled(Text)`
  width: 120px;
`
const Labels = styled(View)`
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`
const Checkout = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.orange};
  padding: 10px;
  width: 120px;
  margin: 0 auto;
  margin-top: 30px;
`
const CheckoutLabel = styled(Text)`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`
