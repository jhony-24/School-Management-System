import * as React from 'react';
import * as S from './styles';

import { View } from 'react-native';
import Text from '../../atoms/Text';
import { TColor, TSize } from '../../../styles/text';
import { Fonts } from '../../../styles/font';

interface HomeItemPropsType extends S.HomeItemStylePropsType {
  iconSource: any;
  text: string;
  onPress?(): void;
}

const HomeItem: React.FC<HomeItemPropsType> = ({
  iconSource,
  text,
  onPress,
  color,
}) => (
  <View>
    <S.HomeItemButtonContainer color={color} onTouchEnd={onPress}>
      <S.IconContainer>
        <S.Icon source={iconSource} />
      </S.IconContainer>
    </S.HomeItemButtonContainer>
    <S.TextContainer>
      <Text size={TSize.SMALL} color={TColor.BLACK} weight={Fonts.BOLD}>
        {text}
      </Text>
    </S.TextContainer>
  </View>
);

export default HomeItem;
