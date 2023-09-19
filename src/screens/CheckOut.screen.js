import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextInput, RadioButton } from 'react-native-paper'
import styled from 'styled-components/native'

export const CheckOut = () => {
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
