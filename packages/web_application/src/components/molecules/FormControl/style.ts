import styled from 'styled-components/native';
import { Colors } from '../../../styles/colors';

const separation_size = '10px';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export const ContainerText = styled.View`
  width: 100%;
  margin-bottom: ${separation_size};
`;

export const ContainerInputForm = styled.View`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: ${Colors.WHITE_LIGHT};
  display: flex;
  overflow: hidden;
  flex-flow: row nowrap;
`;

export const ContainerIcon = styled.View`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInput = styled.View`
  width: 250px;
  height: 100%;
`;
