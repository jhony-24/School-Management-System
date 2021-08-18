import * as React from 'react';
import { Text, View } from 'react-native';

type TError = {
  message: string;
};

const AppError = ({ message }: TError) => (
  <View>
    <Text>{message}</Text>
  </View>
);

export default AppError;
