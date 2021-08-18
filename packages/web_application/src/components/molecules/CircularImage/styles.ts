import styled from 'styled-components/native';

import { Colors } from '../../../styles/colors';
import { CircularImageSize } from '../../../styles/circular_image';

type ContainerProps = {
  size?: CircularImageSize;
};

const border_size = {
  [CircularImageSize.SMALL]: '3px',
  [CircularImageSize.BIG]: '6px',
  [CircularImageSize.DEFAULT]: '6px',
  [CircularImageSize.S_SMALL]: '2px',
};

export const Container = styled.View<ContainerProps>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  border-radius: ${({ size }) => `${size! / 2}px`};
  border: ${({ size }) => border_size[size!]} solid ${Colors.WHITE};
  overflow: hidden;
`;
