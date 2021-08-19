import styled from 'styled-components/native';
import { Colors } from '../../../styles/colors';

const S ={
  content : styled.View`
    width:300px;
    height:40px;
    border-radius:5px;
    background-color : ${Colors.WHITE_LIGHT};
    display:flex;
    overflow:hidden;
    flex-flow:row nowrap;
    justify-content:space-between;

    margin:20px;
  `,
  contentIcon : styled.View`
    width:50px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  `,
  contentInput : styled.View`
    width:250px;
    height:100%;
  `
}
export default S;