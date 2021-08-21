import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  background-color: ${Colors.WHITE_LIGHT};
  border-radius: 10px;
`;

export const Icon = styled.View`
  width: 56px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
