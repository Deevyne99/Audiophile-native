import styled from 'styled-components/native'

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native'
import { Shop } from '../components/Shop'
import { shop } from '../../data'
import { UserComponent } from '../components/User'

export const Home = () => {
  return (
    <Hero>
      <ScrollView>
        {/* <Header>
          <Title>audiophile</Title>
        </Header> */}
        <BackgroundWrapper
          resizeMode='cover'
          source={require('../../assets/earphone-bg1.png')}
        >
          <Content>
            <SmallText>new product</SmallText>
            <LargeText>XX99 Mark II Headphone</LargeText>
            <Description>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Description>
            <Button>
              <ButtonText>see product</ButtonText>
            </Button>
          </Content>
        </BackgroundWrapper>
        <ShopContainer>
          {shop.map((item) => {
            return <Shop key={item.id} item={item} />
          })}
          <Wrapper>
            <DivWrapper>
              <DivElement>
                <DivContainer>
                  <Image
                    source={require('../../assets/zx9-speaker.png')}
                    style={{ height: 160, width: 160 }}
                  ></Image>
                </DivContainer>
              </DivElement>
            </DivWrapper>
            <TitleName>zx9 speaker</TitleName>
            <DescripText>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </DescripText>
            <ButtonBlack>
              <ButtonText>see product</ButtonText>
            </ButtonBlack>
          </Wrapper>
          <BackgroundWrapper
            resizeMode='cover'
            source={require('../../assets/mobile.png')}
          >
            <Content>
              <ButtonBlack>
                <ButtonText>see product</ButtonText>
              </ButtonBlack>
            </Content>
          </BackgroundWrapper>
          <ImageDesc>
            <ImageWrap
              source={require('../../assets/earpod-mobile.png')}
            ></ImageWrap>
            <ProductContainer>
              <Text
                style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}
              >
                YX1 EARPHONES
              </Text>
              <ButtonGray>
                <ButtonGrayText>see product</ButtonGrayText>
              </ButtonGray>
            </ProductContainer>
          </ImageDesc>
          <UserComponent />
        </ShopContainer>
      </ScrollView>
    </Hero>
  )
}
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
  /* background-color: blue; */
`
const ProductContainer = styled(View)`
  /* flex: 1; */
  background-color: ${(props) => props.theme.colors.gray};
  margin-top: ${(props) => props.theme.sizes[2]};
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const ButtonGray = styled(TouchableOpacity)`
  margin-top: ${(props) => props.theme.sizes[2]};
  padding: 10px;
  border: 1px solid #000;
`
const ButtonGrayText = styled(Text)`
  text-transform: uppercase;
`
const Hero = styled(View)`
  /* flex: 1; */
  background-color: #fff;
`

const Header = styled(View)`
  height: 80px;
  background-color: #040404;
  color: white;
`
const Title = styled(Text)`
  flex: 1;
  color: white;
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`
const TitleName = styled(Text)`
  flex: 1;
  color: white;
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`
const Content = styled(View)`
  flex: 1;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`
const SmallText = styled(Text)`
  letter-spacing: 10px;
  color: #fff;
  opacity: 0.3;
`
const LargeText = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
`
const Description = styled(Text)`
  margin-top: 15px;
  color: #fff;
  opacity: 0.6;
  width: 350px;
  text-align: center;
`
const DescripText = styled(Text)`
  color: #fff;
  width: 350px;
  text-align: center;
`
const Button = styled(TouchableOpacity)`
  background-color: #d87d4a;
  padding: 10px;
  margin-top: 15px;
`
const ButtonBlack = styled(TouchableOpacity)`
  background-color: #000;
  padding: 10px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 20px;
  width: 120px;
`
const ButtonText = styled(Text)`
  color: #fff;
  text-transform: uppercase;
`
const BackgroundWrapper = styled(ImageBackground)`
  height: 500px;
  width: 100%;
  border-radius: 8px;
`
export const ShopContainer = styled(View)`
  /* flex: 1; */

  gap: ${(props) => props.theme.space[5]};
  margin: 0 auto;
  align-items: center;
  margin: ${(props) => props.theme.space[4]};
  margin-top: 100px;
  justify-content: center;
`
const Wrapper = styled(View)`
  background-color: ${(props) => props.theme.colors.orange};
  flex: 1;
  border-radius: 8px;
  height: 600px;
  width: 100%;
`
const DivElement = styled(View)`
  /* flex: 1; */
  height: 300px;
  width: 300px;
  border: 1px solid #fff;
  border-radius: 150px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`
const DivContainer = styled(View)`
  /* flex: 1; */
  height: 250px;
  width: 250px;
  border: 1px solid #fff;
  border-radius: 125px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* margin-top: 20px; */
`
const DivWrapper = styled(View)`
  /* flex: 1; */
  height: 400px;
  width: 380px;
  border: 1px solid #fff;
  border-left-style: none;
  border-right-style: none;
  border-bottom: 1px solid #fff;
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* margin-top: 20px; */
`

const ImageDesc = styled(View)`
  /* height: 700px; */
  width: 100%;
  border-radius: 8px;
`
const ImageWrap = styled(Image)`
  height: 300px;
  width: 100%;
`
