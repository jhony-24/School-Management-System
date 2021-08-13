import React, { FC } from 'react';
import { ImageStyle } from './style';

interface ImagePropsType {
  source : string;
  resizeContain? : boolean;
}

export const Image : FC<ImagePropsType> = ({ source, resizeContain }) => (
  <ImageStyle source={{ uri: source }} resizeMode={resizeContain ? 'contain' : 'cover'} />
);
