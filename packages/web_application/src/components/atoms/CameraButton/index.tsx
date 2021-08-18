import * as React from 'react';
import * as S from './styles';

import { Image } from 'react-native';

const CameraIcon = require('../../../assets/icons/camera.png');

const CameraButton = () => (
  <S.Button>
    <Image source={CameraIcon} />
  </S.Button>
);

export default CameraButton;
