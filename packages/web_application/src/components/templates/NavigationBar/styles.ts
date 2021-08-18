import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';
import { PADDING_SCREEN } from '../../../config/constants';

export const Container = styled.View`
  width: 100%;
  height: 64px;
  background-color: ${Colors.BLUE};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${PADDING_SCREEN / 2}px 0 ${PADDING_SCREEN}px;
`;

type TContainer = {
  pressed: boolean;
};

export const CircularContent = styled.View<TContainer>`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: ${({ pressed }) =>
    pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
`;
