import React , { FC } from 'react';
import InputStyles from './style';

export interface InputPropsType {
  onChangeText?(event?:any):void;
  placeholder?:string;
  type? : 'text'|'password';
}

const Input : FC<InputPropsType> = ({ onChangeText , placeholder , type }) => {
  return (
    <InputStyles 
      onChangeText={onChangeText} 
      placeholder={placeholder}
      secureTextEntry={type==='password'}
      />
    )
}

Input.defaultProps = {
  type : 'text',
}

export default Input;