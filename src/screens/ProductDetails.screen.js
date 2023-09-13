import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import styled from 'styled-components/native'
import {
  DescText,
  ImageContainer,
  NameText,
  ProductImage,
  SmallText,
} from '../components/SingleProduct'
import { formatPrice } from '../utils/Price'

const ProductDetails = ({ route, navigation }) => {
  const { item } = route.params
  const {
    name,
    img,
    description,
    price,
    text,
    data,
    size,
    item: items,
    images,
  } = item
  console.log(img)
  return (
    <Container>
      <ScrollView>
        <WrappedContainer>
          <ImageContainer>
            <ProductImage source={img}></ProductImage>
          </ImageContainer>
          <SmallText>new product</SmallText>
          <NameText>{name}</NameText>
          <DescText>{description}</DescText>
          <PriceText>{formatPrice(price)}</PriceText>
          <ButtonContainer>
            <ButtonWrapper>
              <Button>
                <ButtonLabel>-</ButtonLabel>
              </Button>
              <AmountLabel>1</AmountLabel>
              <Button>
                <ButtonLabel>+</ButtonLabel>
              </Button>
            </ButtonWrapper>
            <CartButton>
              <CartLabel>Add to cart</CartLabel>
            </CartButton>
          </ButtonContainer>
          <TextContainer>
            <NameText>Features</NameText>
            <DescText>{text}</DescText>
            <DescText>{data}</DescText>
          </TextContainer>
          <TextContainer>
            <NameText>in the box</NameText>
            <BoxContainer>
              <View>
                {size.map((item, index) => (
                  <SizeText key={index}>{item}</SizeText>
                ))}
              </View>
              <View>
                {items.map((item, index) => (
                  <ItemText key={index}>{item}</ItemText>
                ))}
              </View>
            </BoxContainer>
          </TextContainer>
          <ImageBox>
            <SampleImage source={images.image1}></SampleImage>
            <SampleImage source={images.image2}></SampleImage>
            <SampleImage source={images.image3}></SampleImage>
          </ImageBox>
        </WrappedContainer>
      </ScrollView>
    </Container>
  )
}

export default ProductDetails

const WrappedContainer = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: #fff;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Container = styled(View)`
  flex: 1;
  background-color: #fff;
`
const PriceText = styled(Text)`
  font-weight: bold;
  font-size: 18px;
`
const Button = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.gray};
  padding: 10px;
  justify-content: center;
`
const ButtonContainer = styled(View)`
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;
`
const ButtonLabel = styled(Text)`
  background-color: ${(props) => props.theme.colors.gray};
  font-weight: bold;
  justify-content: center;
  /* padding: 10px; */
`
const AmountLabel = styled(Text)`
  background-color: ${(props) => props.theme.colors.gray};
  font-weight: bold;
  justify-content: center;
  padding: 10px;
`
const ButtonWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const CartButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.orange};
  color: white;
  justify-content: center;
  padding: 10px;
`
const CartLabel = styled(Text)`
  color: white;
`
const TextContainer = styled(View)`
  gap: 16px;
`
const SizeText = styled(Text)`
  color: ${(props) => props.theme.colors.orange};
  line-height: 25px;
  /* font-weight: bold; */
`
const BoxContainer = styled(View)`
  flex-direction: row;
  gap: 16px;
`
const ItemText = styled(Text)`
  color: #000;
  line-height: 25px;
`
const SampleImage = styled(Image)`
  width: 350px;
  border-radius: 8px;
`
const ImageBox = styled(View)`
  margin-top: 24px;
  gap: 20px;
`
