import * as React from 'react';
import * as S from './styles';

import { Image } from 'react-native';
import { View } from 'react-native';
import PublicationInfo from '../../molecules/PublicationInfo';
import { TColor } from '../../../styles/text';
import Button from '../../atoms/Button';
import { BColor, BSize } from '../../../styles/button';
import ImageAtom from '../../atoms/Image';
import { useState } from 'react';
import CarruselImages from '../../molecules/CarruselImages';

type PublicationType = 'homework' | 'announcement';

interface PublicationPropsType {
  type: PublicationType;
  title: string;
  date: string;
  description: string;
  onPress?(): void;
  images?: string[];
}

const Publication: React.FC<PublicationPropsType> = ({
  type,
  title,
  date,
  description,
  onPress,
  images,
}) => {
  return (
    <S.Container>
      <PublicationInfo
        titleColor={type === 'homework' ? TColor.BLUE : TColor.RED}
        title={title}
        date={date}
        description={description}
      />

      {images && (
        <S.CarruselContainer>
          <CarruselImages images={images} />
        </S.CarruselContainer>
      )}

      {type === 'homework' && (
        <S.ButtonContainer>
          <Button
            onPress={onPress}
            text="Ver detalles"
            color={BColor.BLUE}
            size={BSize.SMALL}
          />
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default Publication;
