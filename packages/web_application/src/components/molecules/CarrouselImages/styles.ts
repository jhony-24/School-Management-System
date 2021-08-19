import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageCarrusel = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const ArrowNextContainer = styled.View`
  position: absolute;
  padding: 0 10px;
  right: 0;
`;

export const ArrowPrevContainer = styled.View`
  position: absolute;
  padding: 0 10px;
  left: 0;
`;
