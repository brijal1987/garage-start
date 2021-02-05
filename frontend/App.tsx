import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from './src/styles'
import { Provider } from 'react-redux'
import { store } from './src/store'

import Garage from './src/screens/Garage'
import GarageDetail from './src/screens/GarageDetail'

let RootStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen key="garrage" name="Garage" component={Garage} />
          <RootStack.Screen key="garrage-detail" name="GarageDetail" component={GarageDetail} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
