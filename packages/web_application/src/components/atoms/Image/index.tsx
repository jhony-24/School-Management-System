import * as React from 'react';
import { ImageStyle } from './style';

interface ImagePropsType {
  source: string;
  resizeContain?: boolean;
}

const Image = ({ source, resizeContain }: ImagePropsType) => (
  <ImageStyle
    source={{ uri: source }}
    resizeMode={resizeContain ? 'contain' : 'cover'}
  />
);

export default Image;
