import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/font';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

export const Icon = styled.View`
  width: 48px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  font-family: ${Fonts.REGULAR};
  color: ${Colors.BLACK};
  font-size: 13px;
  padding: 0 16px 0 0;
`;
