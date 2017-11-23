import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './src/Views/Home'
import DisclaimerScreen from './src/Views/Disclaimer'
import UnitLoaderScreen from './src/Views/UnitLoader'
import UnitBrowserScreen from './src/Views/UnitBrowser'


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
  },
  BrowseUnits: {
    screen: UnitBrowserScreen,
    path: 'unit'
  }
})
export default App