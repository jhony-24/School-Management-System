import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';
import { PADDING_SCREEN } from '../../../config/constants';

type ContainerProps = {
  pressed: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px ${PADDING_SCREEN + 16}px;
  background-color: ${({ pressed }) =>
    pressed ? Colors.WHITE_LIGHT : 'transparent'};
`;

export const Circle = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.RED};
  border-radius: 20px;
`;

export const TextContainer = styled.View`
  padding-left: 16px;
`;
