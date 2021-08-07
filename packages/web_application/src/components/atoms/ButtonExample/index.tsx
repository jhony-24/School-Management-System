import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

const ButtonExample = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.button_text}>Example</Text>
    </Pressable>
  );
};

export default ButtonExample;
