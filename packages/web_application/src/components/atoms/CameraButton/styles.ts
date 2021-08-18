import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';

export const Button = styled.TouchableOpacity`
  width: 64px;
  height: 32px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.BLUE};
  border-radius: 5px;
`;
