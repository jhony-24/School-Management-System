import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';

export enum BHomeItemColor {
  RED = Colors.RED,
  BLUE = Colors.BLUE,
  GREEN = Colors.GREEN,
}

export interface HomeItemStylePropsType {
  color: BHomeItemColor;
}

export const Container = styled.View``;

export const HomeItemButtonContainer = styled.View<HomeItemStylePropsType>`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 7px;

  background-color: ${({ color }) => color && color};
`;

export const IconContainer = styled.View`
  width: 45px;
  height: 50%;
`;

export const Icon = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.View`
  align-self: center;
`;
