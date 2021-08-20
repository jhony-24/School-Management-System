import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background-color: ${Colors.WHITE};
  border-radius: 10px;
`;

export const DetailCourse = styled.View`
  padding-left: 14px;
  flex: 1;
`;
