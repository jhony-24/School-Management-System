import styled from 'styled-components/native';

import { Fonts } from '../../../styles/font';
import { BSize, BColor } from '../../../styles/button';

const font_size = {
  [BSize.SMALL]: '12px',
  [BSize.NORMAL]: '14px',
};

export interface ButtonStylePropsType {
  size?: BSize;
  color?: BColor;
  ghost?: boolean;
}

export const Content = styled.TouchableOpacity<ButtonStylePropsType>`
  width: 100%;
  height: ${({ size }) => size};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${({ color, ghost }) => (ghost ? `2px solid ${color}` : 'none')};
  background-color: ${({ color, ghost }) => (ghost ? 'transparent' : color)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Text = styled.Text<ButtonStylePropsType>`
  font-family: ${Fonts.EXTRA_BOLD};
  font-size: ${({ size }) => font_size[size!]};
  color: ${({ color, ghost }) => (ghost ? color : BColor.WHITE)};
`;
