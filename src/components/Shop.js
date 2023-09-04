import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
// import { shop } from '../../data'
import yx1 from '../../assets/yx1.png'
import { AntDesign } from '@expo/vector-icons'
export const Shop = ({ name, img }) => {
  console.log(img)
  return (
    <Card>
      <Icon source={img}></Icon>
      <TextLabel>{name}</TextLabel>
      <ShopButton>
        <ButtonLabel>shop</ButtonLabel>
        <IconAnt name='right' size={16} color='black' />
      </ShopButton>
    </Card>
  )
}

const Card = styled(View)`
  background-color: ${(props) => props.theme.colors.gray};

  height: 150px;
  width: 300px;
  border-radius: 8px;
`
const Icon = styled(Image)`
  height: 70px;
  width: 70px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
`
const TextLabel = styled(Text)`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
`
const ShopButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-weight: bold;
  gap: ${(props) => props.theme.sizes[0]};
`
const ButtonLabel = styled(Text)`
  color: #000;
  opacity: 0.5;
  text-align: center;
  justify-content: center;
  font-size: ${(props) => props.theme.sizes[1]};
  align-items: center;
  text-transform: uppercase;
`
const IconAnt = styled(AntDesign)`
  color: ${(props) => props.theme.colors.orange};
`
