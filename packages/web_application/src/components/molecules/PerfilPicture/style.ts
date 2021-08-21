import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';
import { CircularImageSize } from '../../../styles/circular_image';

const bg_height = 120;
const image_height = CircularImageSize.DEFAULT / 2;
const total_height = bg_height + image_height;

const PerfilPictureStyle = {
  Content: styled.View`
    width: 100%;
    height: ${total_height}px;
    position: relative;
    display: flex;
    align-items: center;
  `,
  ContentImage: styled.View`
    position: absolute;
    bottom: 0;
  `,
  Background: styled.View`
    width: 100%;
    height: ${bg_height}px;
    background-color: ${Colors.BLUE};
  `,
};

export default PerfilPictureStyle;
