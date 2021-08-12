import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

const Stack = createStackNavigator();

const DefaultStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Login" component={() => <Text>Login</Text>} />
  </Stack.Navigator>
);

export default DefaultStack;
