import * as React from 'react';
import { Image } from 'react-native';
import * as S from './styles';

interface CarruselImagesPropsType {
  images: string[];
}

const CarruselImages: React.FC<CarruselImagesPropsType> = ({ images }) => {
  const [actualIndex, setActualIndex] = React.useState<number>(0);

  const onTouchNext = () => {
    setActualIndex(actualIndex + 1);
  };

  const onTouchPrev = () => {
    setActualIndex(actualIndex - 1);
  };

  return (
    <S.ImageContainer>
      <S.ImageCarrusel source={{ uri: images[actualIndex] }} />
      {images.length - 1 !== actualIndex && (
        <S.ArrowNextContainer onTouchEnd={onTouchNext}>
          <S.ArrowSize
            source={require('../../../assets/icons/arrow_right.png')}
          />
        </S.ArrowNextContainer>
      )}
      {actualIndex !== 0 && (
        <S.ArrowPrevContainer onTouchEnd={onTouchPrev}>
          <S.ArrowSize
            source={require('../../../assets/icons/arrow_left.png')}
          />
        </S.ArrowPrevContainer>
      )}
    </S.ImageContainer>
  );
};

export default CarruselImages;
