import styled from 'styled-components/native';
import { Colors } from '../../../styles/colors';
import { TColor } from '../../../styles/text';

export enum BNavbarItemBackColor {
  WHITE = Colors.WHITE,
  WHITE_LIGHT_B = Colors.WHITE_LIGHT_B,
}

export interface NavbarItemStyleProps {
  backColor: BNavbarItemBackColor;
  color?: TColor;
}

interface NavbarItemContentStyleProps {
  active?: boolean;
}

export const Container = styled.View<NavbarItemStyleProps>`
  width: 100%;
  height: 48px;
  background-color: ${({ backColor }) => backColor && backColor};

  padding: 32px;
`;

export const NavbarItemContent = styled.View<NavbarItemContentStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

export const ImageContainer = styled.View`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

export const ImageStyle = styled.Image`
  width: 100%;
  height: 100%;
`;
