import * as React from 'react';
import { ImageSourcePropType, View } from 'react-native';
import * as S from './styles';
import Text from '../../atoms/Text';
import { TColor, TSize } from '../../../styles/text';
import { Image } from 'react-native';
import Icon from '../../atoms/Icon';
import { IconType } from '../../../styles/icons';

type TProps = {
  course: string;
  file: string;
};

const HomeworkFileItem = ({ course, file }: TProps) => {
  const extension = getFileExtension(file);
  const canShowFileExtension = extension !== '';

  return (
    <S.Container>
      <View>
        {canShowFileExtension && (
          <Image source={resourceImages[extension]} resizeMode="contain" />
        )}
      </View>
      <S.DetailCourse>
        <Text>{course}</Text>
        <Text size={TSize.SMALL} color={TColor.BLACK}>
          Archivo {extension}
        </Text>
      </S.DetailCourse>
      {canShowFileExtension && <Icon icon={IconType.ARROW_RIGHT_BLACK} />}
    </S.Container>
  );
};

HomeworkFileItem.defaultProps = {
  preview: false,
};

const resourceImages: Record<string, ImageSourcePropType> = {
  pdf: require('../../../assets/icons/file-pdf.png'),
  jpg: require('../../../assets/icons/file-image.png'),
};

function getFileExtension(path: string) {
  const index = path.lastIndexOf('.');
  return index !== -1 ? path.slice(index + 1) : '';
}

export default HomeworkFileItem;
