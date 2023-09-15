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
import { useGlobalContext } from '../Hooks/context'
import { useNavigation } from '@react-navigation/native'

const ProductDetails = ({ route }) => {
  const { allProducts, increaseAmount, decreaseAmount, amount, AddToCart } =
    useGlobalContext()
  const navigation = useNavigation()
  const { item } = route.params
  const {
    id,
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

  const products = allProducts.filter((item) => item.name !== name)
  // console.log(products)

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
              <Button onPress={decreaseAmount}>
                <ButtonLabel>-</ButtonLabel>
              </Button>
              <AmountLabel>{amount}</AmountLabel>
              <Button onPress={increaseAmount}>
                <ButtonLabel>+</ButtonLabel>
              </Button>
            </ButtonWrapper>
            <CartButton onPress={() => AddToCart(id, item, amount)}>
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
          <ScrollView
            style={{}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View>
              {products
                .map((item) => {
                  const { name, img, id } = item
                  return (
                    <View
                      key={id}
                      style={{
                        justifyContent: 'center',
                        marginTop: 30,
                      }}
                    >
                      <SmallContainer>
                        <SmallImage source={img}></SmallImage>
                      </SmallContainer>
                      <NameText style={{ width: 200 }}>{name}</NameText>
                      <CartButton
                        style={{ width: 120, marginTop: 8 }}
                        onPress={() => navigation.navigate('Details', { item })}
                      >
                        <CartLabel>SEE PRODUCT</CartLabel>
                      </CartButton>
                    </View>
                  )
                })
                .slice(0, 3)}
            </View>
          </ScrollView>
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
  margin: 0 auto;
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
export const SmallImage = styled(Image)`
  width: 270px;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 0 auto;
`

export const SmallContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.gray};
  height: 350px;
  width: 350px;
  justify-content: center;
  align-itmens: center;
  border-radius: 8px;
`
