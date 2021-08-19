import * as React from 'react';
import * as S from './styles';

import Icon from '../../atoms/Icon';
import { IconType } from '../../../styles/icons';

interface CarruselImagesPropsType {
  images: string[];
}

const CarruselImages: React.FC<CarruselImagesPropsType> = ({ images }) => {
  const [actualIndex, setActualIndex] = React.useState<number>(0);

  const onTouchNext = () => setActualIndex(() => actualIndex + 1);
  const onTouchPrev = () => setActualIndex(() => actualIndex - 1);

  return (
    <S.ImageContainer>
      <S.ImageCarrusel source={{ uri: images[actualIndex] }} />
      {images.length - 1 !== actualIndex && (
        <S.ArrowNextContainer onTouchEnd={onTouchNext}>
          <Icon icon={IconType.ARROW_RIGHT} />
        </S.ArrowNextContainer>
      )}
      {actualIndex !== 0 && (
        <S.ArrowPrevContainer onTouchEnd={onTouchPrev}>
          <Icon icon={IconType.ARROW_LEFT} />
        </S.ArrowPrevContainer>
      )}
    </S.ImageContainer>
  );
};

export default CarruselImages;
