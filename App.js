// import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import styled from 'styled-components/native'
import { theme } from './src/styleGuide'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeArea>
        <Hero>
          <ScrollView>
            <Header>
              <Title>audiophile</Title>
            </Header>
            <BackgroundWrapper
              resizeMode='cover'
              source={require('./assets/earphone-bg1.png')}
            >
              <Content>
                <SmallText>new product</SmallText>
                <LargeText>XX99 Mark II Headphone</LargeText>
                <Description>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </Description>
                <Button>
                  <ButtonText>see product</ButtonText>
                </Button>
              </Content>
            </BackgroundWrapper>
          </ScrollView>
        </Hero>
      </SafeArea>
    </ThemeProvider>
  )
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
  /* background-color: blue; */
`
const Hero = styled(View)`
  flex: 1;

  /* background-color: red; */
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
const Button = styled(TouchableOpacity)`
  background-color: #d87d4a;
  padding: 10px;
  margin-top: 15px;
`
const ButtonText = styled(Text)`
  color: #fff;
  text-transform: uppercase;
`
const BackgroundWrapper = styled(ImageBackground)`
  height: 500px;
`
