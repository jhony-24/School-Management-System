import React, { FC } from 'react';
import S from './style';

import CircularImage from '../CircularImage';

interface PerfilPicturePropsType {
  source: string;
}

const PerfilPicture: FC<PerfilPicturePropsType> = ({ source }) => (
  <S.Content>
    <S.Background />
    <S.ContentImage>
      <CircularImage source={source} />
    </S.ContentImage>
  </S.Content>
);

export default PerfilPicture;
