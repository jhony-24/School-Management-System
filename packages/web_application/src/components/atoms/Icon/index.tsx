import React, { FC } from 'react';
import { IconStyle } from './style';
import { Icons } from '../../../styles/icon';

export interface IconPropsType {
  icon : Icons;
}

const Icon : FC<IconPropsType> = ({ icon }) => (
  <IconStyle source={icon} resizeMode="contain" />
);

export default Icon;
