import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './src/components/Views/Home'


const App = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
})
export default App