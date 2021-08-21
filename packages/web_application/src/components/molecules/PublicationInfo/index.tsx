import * as React from 'react';
import * as S from './styles';

import { FC } from 'react';
import Text from '../../atoms/Text';
import { View } from 'react-native';
import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';

interface PublicationInfoPropsType extends S.PublicationInfoStylePropsType {
  title: string;
  date: string;
  description: string;
}

const PublicationInfo: FC<PublicationInfoPropsType> = ({
  title,
  date,
  description,
  titleColor,
}) => (
  <S.Container>
    <S.HeaderContainer>
      <S.TitleContainer>
        <Text weight={Fonts.BOLD} size={TSize.NORMAL} color={titleColor}>
          {title}
        </Text>
      </S.TitleContainer>
      <Text weight={Fonts.REGULAR} size={TSize.VERY_SMALL} color={TColor.GRAY}>
        {date}
      </Text>
    </S.HeaderContainer>
    <Text weight={Fonts.REGULAR} size={TSize.VERY_SMALL}>
      {description}
    </Text>
  </S.Container>
);

export default PublicationInfo;
