import * as React from 'react';
import * as S from './styles';
import { Pressable } from 'react-native';

import Text from '../../atoms/Text';

import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import Icon from '../../atoms/Icon';
import { IconType } from '../../../styles/icons';

type TProps = {
  title: string;
};

const NavigationBar = ({ title }: TProps) => {
  const navigation = useNavigation();

  const openDrawerMenu = () => navigation.dispatch(DrawerActions.openDrawer);

  return (
    <S.Container>
      <Text weight={Fonts.BLACK} size={TSize.BIG} color={TColor.WHITE}>
        {title}
      </Text>
      <Pressable onPress={openDrawerMenu}>
        {({ pressed }) => (
          <S.CircularContent pressed={pressed}>
            <Icon icon={IconType.BARS} />
          </S.CircularContent>
        )}
      </Pressable>
    </S.Container>
  );
};

export default NavigationBar;
