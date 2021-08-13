import React, { FC } from 'react';
import { ButtonContent, ButtonStylePropsType, ButtonText } from './styles';

interface ButtonPropsType extends ButtonStylePropsType {
  onPress(event?:any):void;
  text:string;
}

export const ButtonComponent : FC<ButtonPropsType> = ({
  size, color, ghost, text, opacity, onPress,
}) => (
  <ButtonContent onPress={onPress} size={size} color={color} ghost={ghost} opacity={opacity}>
    <ButtonText color={color} ghost={ghost} size={size}>
      {text}
    </ButtonText>
  </ButtonContent>
);
