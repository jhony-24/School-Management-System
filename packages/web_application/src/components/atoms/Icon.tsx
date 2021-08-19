import * as React from 'react';
import { Image } from 'react-native';
import { IconType } from '../../styles/icons';

export interface IconPropsType {
  icon: IconType;
}

const Icon: React.FC<IconPropsType> = ({ icon }) => (
  <Image source={icon} resizeMode="contain" />
);

export default Icon;
