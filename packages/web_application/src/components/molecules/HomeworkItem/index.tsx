import * as React from 'react';
import { View } from 'react-native';
import * as S from './styles';
import Text from '../../atoms/Text';
import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';
import { HomeworkState } from '../../../styles/homework';
import { Image } from 'react-native';

const ChevronRight = require('../../../assets/icons/chevron-right.png');


type TProps = {
  course: string;
  date: string;
  state?: HomeworkState;
  preview?: boolean;
};

const HomeworkItem = ({ course, date, state, preview }: TProps) => {
  const textCourseColor =
    state === HomeworkState.lated ? TColor.RED : TColor.BLACK;

  return (
    <S.Container>
      <View>
        <Text>icon</Text>
      </View>
      <S.DetailCourse>
        <Text weight={Fonts.BOLD} color={textCourseColor}>
          {course}
        </Text>
        <Text size={TSize.SMALL}>Se entregó el {date}</Text>
      </S.DetailCourse>
      {preview && (
        <View>
          <Image source={ChevronRight} />
        </View>
      )}
    </S.Container>
  );
};

HomeworkItem.defaultProps = {
  preview: false,
};

export default HomeworkItem;
