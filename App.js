// import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import styled from 'styled-components/native'
import { theme } from './src/styleGuide'
import { Home } from './src/screens/Home.screen'
import { Products } from './src/screens/products.screen'
import { Product } from './src/screens/product.screen'
import { Cart } from './src/screens/Cart.screen'
import { CheckOut } from './src/screens/CheckOut.screen'
const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Products' component={Products} />
            <Tab.Screen name={`${'divine'}`} component={Product} />
            <Tab.Screen name='Cart' component={Cart} />
            <Tab.Screen name='Checkout ' component={CheckOut} />
            {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
          </Tab.Navigator>
        </SafeArea>
      </ThemeProvider>
    </NavigationContainer>
  )
}
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
  /* background-color: blue; */
`
