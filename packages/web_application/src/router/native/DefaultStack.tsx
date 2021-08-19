import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/native/Login';

const Stack = createStackNavigator();

const DefaultStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default DefaultStack;
