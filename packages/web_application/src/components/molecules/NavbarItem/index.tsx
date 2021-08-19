import * as React from 'react';
import * as S from './styles';

import Text from '../../atoms/Text';

import { TSize } from '../../../styles/text';
import { Fonts } from '../../../styles/font';

interface NavbaritemPropsType extends S.NavbarItemStyleProps {
  iconSource: any;
  text: string;
  onPress(): void;
  active?: boolean;
}

const Navbaritem: React.FC<NavbaritemPropsType> = ({
  text,
  iconSource,
  onPress,
  backColor,
  color,
  active,
}) => {
  const [isHover, setIsHover] = React.useState<boolean>();

  const onTouchStart = () => setIsHover(true);

  const onTouchEnd = () => {
    setIsHover(false);
    onPress();
  };

  return (
    <S.Container
      backColor={isHover ? S.BNavbarItemBackColor.WHITE_LIGHT_B : backColor}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <S.NavbarItemContent active={active}>
        <S.ImageContainer>
          <S.ImageStyle source={iconSource} resizeMode="contain" />
        </S.ImageContainer>
        <Text color={color} size={TSize.NORMAL} weight={Fonts.BOLD}>
          {text}
        </Text>
      </S.NavbarItemContent>
    </S.Container>
  );
};

export default Navbaritem;
