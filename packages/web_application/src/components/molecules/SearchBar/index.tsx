import * as React from 'react';
import * as S from './styles';
import { Image } from 'react-native';

import { Colors } from '../../../styles/colors';

const SearchIcon = require('../../../assets/icons/search.png');

type TProps = {
  onChangeText?(text: string): void;
};

const SearchBar = ({ onChangeText }: TProps) => (
  <S.Container>
    <S.Icon>
      <Image source={SearchIcon} />
    </S.Icon>
    <S.Input
      placeholder="Busca por nombre..."
      onChangeText={onChangeText}
      placeholderTextColor={Colors.GRAY}
    />
  </S.Container>
);

export default SearchBar;
