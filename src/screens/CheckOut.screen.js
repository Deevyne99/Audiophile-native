import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { TextInput, RadioButton } from 'react-native-paper'
import styled from 'styled-components/native'
import { useGlobalContext } from '../Hooks/context'
import { formatPrice } from '../utils/Price'
import {
  Button,
  ButtonWrapper,
  ButtonLabel,
  AmountLabel,
} from './ProductDetails.screen'
import { Checkout, CheckoutLabel } from './Cart.screen'
import { useNavigation } from '@react-navigation/native'

export const CheckOut = () => {
  const navigation = useNavigation()
  const { cart, amount } = useGlobalContext()
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
      <Wrapper>
        <BillingContainer>
          <Title>Billing Details</Title>
          <InputBox>
            <Label>Name</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='Moses John'
            ></TextInput>
          </InputBox>
          <InputBox>
            <Label>Email</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='john@gmail.com'
            ></TextInput>
          </InputBox>
          <InputBox>
            <Label>Phnone Number</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='081 4815 8802'
            ></TextInput>
          </InputBox>
        </BillingContainer>
        <BillingContainer>
          <Title>Shipping Info</Title>
          <InputBox>
            <Label>Address</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='24 John snow street'
            ></TextInput>
          </InputBox>
          <InputBox>
            <Label>Zipcode</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='22550'
            ></TextInput>
          </InputBox>
          <InputBox>
            <Label>City</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='London'
            ></TextInput>
          </InputBox>
          <InputBox>
            <Label>Country</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='United Kingdom'
            ></TextInput>
          </InputBox>
        </BillingContainer>
        <BillingContainer>
          <Title>Payment Method</Title>
          <InputBox>
            <Label>e-Money Number</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='john@gmail.com'
            ></TextInput>
          </InputBox>
          <InputBox>
            <Label>e-Money PIN</Label>
            <TextInput
              mode='outlined'
              outlineColor='#CFCFCF'
              activeOutlineColor='#CFCFCF'
              placeholder='john@gmail.com'
            ></TextInput>
          </InputBox>
        </BillingContainer>
        <BillingContainer>
          <Heading>Summary</Heading>
          {cart.map((items) => {
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
        </BillingContainer>
        <ButtonPay>
          <ButtonPayLabel>continue & pay </ButtonPayLabel>
        </ButtonPay>
      </Wrapper>
    </ScrollView>
  )
}

const Wrapper = styled(View)`
  padding: 16px;
  gap: 16px;
`
const BillingContainer = styled(View)`
  flex-direction: column;
`
const Title = styled(Text)`
  color: ${(props) => props.theme.colors.orange};
`

const InputBox = styled(View)`
  flex-direction: column;
  margin-top: 16px;
`
const Label = styled(Text)`
  font-weight: bold;
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
const Heading = styled(Text)`
  font-weight: bold;
  font-size: 24px;
`
const ButtonPay = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.orange};
  padding: 10px;
`
const ButtonPayLabel = styled(Text)`
  color: #fff;
  text-align: center;
  text-transform: capitalize;
`
