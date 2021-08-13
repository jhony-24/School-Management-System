import styled from 'styled-components/native';

import Colors, { ColorsType } from '../../../config/colors';
import { TextSizes, TextTypes, LINE_HEIGHT } from '../../../config/text_size';
import Fonts from '../../../config/font';

interface ParagraphPropsType {
  color : ColorsType;
  size : TextTypes;
  font : Fonts;
}

export const Paragraph = styled.Text<ParagraphPropsType>`
  color : ${({ color }) => Colors[color.toUpperCase()]};
  font-size : ${({ size }) => `${TextSizes[size.toUpperCase()]}px`};
  font-family: ${({ font }) => font};
  width:100%;
  line-height: ${({ size }) => `${(TextSizes[size.toUpperCase()] * LINE_HEIGHT)}px`};
`;
