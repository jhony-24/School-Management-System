import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Test from '../screens/native/Test';

const Stack = createStackNavigator();

const RouterApplication = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RouterApplication;
