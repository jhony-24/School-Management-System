import styled from 'styled-components/native';
import { Colors } from '../../../styles/colors';

const size_picture = 180;

const PerfilPictureStyle = {
  Content: styled.View`
    width:100%;
    height:230px;
    display:flex;
    align-items:center;
  `,
  ContentImage: styled.View`
    width:${size_picture}px;
    height:${size_picture}px;
    position : absolute;
    overflow:hidden;
    bottom:0;
    border-radius:${size_picture * 0.5}px;
  `,
  Background: styled.View`
    width:100%;
    height:160px;
    background-color : ${Colors.BLUE};
  `,
};

export default PerfilPictureStyle;
