// import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import styled from 'styled-components/native'
import { theme } from './src/styleGuide'
import { Home } from './src/screens/Home.screen'
import { Products } from './src/screens/Products.screen'
// import { Product } from './src/screens/product.screen'
import { Cart } from './src/screens/Cart.screen'
import { CheckOut } from './src/screens/CheckOut.screen'
import { ProductNavigator } from './src/components/routes/ProductsNavigator'
import { AppProvider } from './src/Hooks/context'

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <SafeArea>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName

                  if (route.name === 'Home') {
                    iconName = 'md-home'
                  } else if (route.name === 'Products') {
                    iconName = 'grid'
                  } else if (route.name === 'Cart') {
                    iconName = 'cart'
                  } else if (route.name === 'Checkout') {
                    iconName = 'card'
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#D87D4A',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
              })}
            >
              <Tab.Screen name='Home' component={Home} />
              <Tab.Screen name='Products' component={ProductNavigator} />
              {/* <Tab.Screen name={`${'divine'}`} component={Product} /> */}
              <Tab.Screen name='Cart' component={Cart} />
              <Tab.Screen name='Checkout' component={CheckOut} />
              {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
            </Tab.Navigator>
          </SafeArea>
        </ThemeProvider>
      </AppProvider>
    </NavigationContainer>
  )
}
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
  /* background-color: blue; */
`
