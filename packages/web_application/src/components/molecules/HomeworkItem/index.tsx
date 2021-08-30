import * as React from 'react';
import { View } from 'react-native';
import * as S from './styles';
import Text from '../../atoms/Text';
import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';
import { HomeworkState } from '../../../styles/homework';
import { IconType } from '../../../styles/icons';
import Icon from '../../atoms/Icon';

type TProps = {
  course: string;
  date: string;
  state?: HomeworkState;
};

const HomeworkItem = ({ course, date, state }: TProps) => {
  const textCourseColor =
    state === HomeworkState.lated ? TColor.RED : TColor.BLACK;
  const iconState =
    state === HomeworkState.lated
      ? IconType.HOMEWORK_LATED
      : IconType.HOMEWORK_OK;

  return (
    <S.Container>
      <View>
        <Icon icon={iconState} />
      </View>
      <S.DetailCourse>
        <Text weight={Fonts.BOLD} color={textCourseColor}>
          {course}
        </Text>
        <Text size={TSize.SMALL}>Se entregó el {date}</Text>
      </S.DetailCourse>
      <Icon icon={IconType.ARROW_RIGHT_BLACK} />
    </S.Container>
  );
};

HomeworkItem.defaultProps = {
  preview: false,
};

export default HomeworkItem;
