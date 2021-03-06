/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainMenu from './screens/MainMenu';
import NewGame from './screens/NewGame';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
      />
      <Stack.Screen
        name="NewGame"
        component={NewGame}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
