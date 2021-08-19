import React, { FC } from 'react';
import { Colors } from '../../../styles/colors';
import InputStyles from './styles';

export interface InputPropsType {
  placeholder?: string;
  type?: 'text' | 'password';
  onChangeText?(text: string): void;
}

const Input: FC<InputPropsType> = ({ onChangeText, placeholder, type }) => {
  return (
    <InputStyles
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={Colors.GRAY}
      secureTextEntry={type === 'password'}
    />
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
