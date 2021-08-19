import React, { FC } from 'react';
import PerfilPictureStyle from './style';
import Image from '../../atoms/Image';

interface PerfilPicturePropsType {
  source : string;
}

export const PerfilPicture : FC<PerfilPicturePropsType> = ({ source }) => (
  <PerfilPictureStyle.Content>
    <PerfilPictureStyle.Background />
    <PerfilPictureStyle.ContentImage>
      <Image source={source} />
    </PerfilPictureStyle.ContentImage>
  </PerfilPictureStyle.Content>
);
