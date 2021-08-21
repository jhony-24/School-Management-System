import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/font';

const InputStyle = styled.TextInput`
  flex: 1;
  height: 100%;
  padding: 0 16px 0 0;
  color: ${Colors.BLACK};
  font-family: ${Fonts.REGULAR};
  background-color: ${Colors.WHITE_LIGHT};
`;

export default InputStyle;
