import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styled } from 'styled-components/native'

// import img from '../../assets/earpod-mobile.png'
export const SingleProduct = ({ item }) => {
  const navigation = useNavigation()
  const { name, description, img } = item
  return (
    <ProductContainer>
      <ImageContainer>
        <ProductImage source={item.img}></ProductImage>
      </ImageContainer>
      <SmallText>NEW PRODUCT</SmallText>
      <NameText>{item.name}</NameText>
      <DescText>{item.description}</DescText>
      <Button onPress={() => navigation.navigate('Details', { item })}>
        <ButtonLabel>see Product</ButtonLabel>
      </Button>
    </ProductContainer>
  )
}
const ButtonLabel = styled(Text)`
  text-transform: uppercase;
  color: white;
`
export const SmallText = styled(Text)`
  letter-spacing: 10px;
  margin-top: ${(props) => props.theme.sizes[2]};
  color: ${(props) => props.theme.colors.orange};
  font-size: 10px;
  text-transform: uppercase;
`
export const NameText = styled(Text)`
  margin: 0 auto;
  margin-top: ${(props) => props.theme.sizes[1]};
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
`
export const DescText = styled(Text)`
  opacity: 0.5;
  line-height: 25px;
  text-align: center;
`
const ProductContainer = styled(View)`
  /* flex: 1; */
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`

export const ProductImage = styled(Image)`
  width: 280px;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 0 auto;
`

export const ImageContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.gray};
  height: 400px;
  width: 320px;
  justify-content: center;
  align-itmens: center;
`
const Button = styled(TouchableOpacity)`
  background-color: #d87d4a;
  padding: 10px;
  margin-top: 15px;
`
