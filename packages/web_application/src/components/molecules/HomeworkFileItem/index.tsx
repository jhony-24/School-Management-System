import * as React from 'react';
import { View } from 'react-native';
import * as S from './styles';
import Text from '../../atoms/Text';
import { TColor, TSize } from '../../../styles/text';
import { Image } from 'react-native';
import Icon from '../../atoms/Icon';
import { IconType } from '../../../styles/icons';

type TProps = {
  course: string;
  preview?: boolean;
  file: string;
};

const HomeworkFileItem = ({ course, file, preview }: TProps) => {
  const extension = getFileExtension(file);
  const fileImage = fileImages[extension];

  return (
    <S.Container>
      <View>
        <Image source={resourceImages[fileImage]} resizeMode="contain" />
      </View>
      <S.DetailCourse>
        <Text>{course}</Text>
        <Text size={TSize.SMALL} color={TColor.BLACK}>
          Archivo {extension}
        </Text>
      </S.DetailCourse>
      {preview && <Icon icon={IconType.ARROW_RIGHT_BLACK} />}
    </S.Container>
  );
};

HomeworkFileItem.defaultProps = {
  preview: false,
};

const resourceImages = {
  pdf: require('../../../assets/icons/file-pdf.png'),
  jpg: require('../../../assets/icons/file-image.png'),
};

const fileImages: Record<string, string> = {
  pdf: 'pdf',
  jpg: 'jpg',
};

function getFileExtension(path: string) {
  return path.slice(path.length - 3);
}

export default HomeworkFileItem;
