import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './src/components/Views/Home'
import DisclaimerScreen from './src/components/Views/Disclaimer'
import UnitLoaderScreen from './src/components/Views/UnitLoader'


const App = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
  Disclaimer: {
    screen: DisclaimerScreen
  },
  Unit: {
    screen: UnitLoaderScreen,
    path: 'unit/:unitCode'
  }
})
export default App