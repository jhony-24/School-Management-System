import * as React from 'react';
import * as S from './styles';
import { Image, Pressable, View } from 'react-native';

import Text from '../../atoms/Text';

import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const BarsIcon = require('../../../assets/icons/bars.png');

const NavigationBar = () => {
  const navigation = useNavigation();

  const openDrawerMenu = () => navigation.dispatch(DrawerActions.openDrawer);

  return (
    <S.Container>
      <Text weight={Fonts.BLACK} size={TSize.BIG} color={TColor.WHITE}>
        Inicio
      </Text>
      <Pressable onPress={openDrawerMenu}>
        {({ pressed }) => (
          <S.CircularContent pressed={pressed}>
            <Image source={BarsIcon} />
          </S.CircularContent>
        )}
      </Pressable>
    </S.Container>
  );
};

export default NavigationBar;
