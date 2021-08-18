import * as React from 'react';
import * as S from './styles';

import { ActivityIndicator } from 'react-native';

import { Colors } from '../../../styles/colors';

const SourceLoading = () => (
  <S.Container>
    <ActivityIndicator size="large" color={Colors.BLUE} />
  </S.Container>
);

export default SourceLoading;
