import * as React from 'react';
import * as S from './styles';

import Image from '../../atoms/Image';
import { CircularImageSize } from '../../../styles/circular_image';

type TProps = {
  source: string;
  size?: CircularImageSize;
};

const CircularImage = ({ source, size }: TProps) => (
  <S.Container size={size}>
    <Image source={source} />
  </S.Container>
);

CircularImage.defaultProps = {
  size: CircularImageSize.DEFAULT,
};

export default CircularImage;
