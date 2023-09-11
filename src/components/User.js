import React from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components/native'
import { DescText, NameText } from './SingleProduct'

export const UserComponent = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageUser source={require('../../assets/user.png')}></ImageUser>
      </ImageWrapper>
      <NameText>Bringing you the best audio gear</NameText>
      <DescText>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </DescText>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  gap: 24px;
`
const ImageWrapper = styled(View)``
const ImageUser = styled(Image)`
  width: 350px;
  height: 300px;
`
