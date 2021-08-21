import * as React from 'react';
import { ScrollView } from 'react-native';
import HomeworkFileItem from '../../components/molecules/HomeworkFileItem';
import HomeworkItem from '../../components/molecules/HomeworkItem';

import MarkState from '../../components/molecules/MarkState';
import { HomeworkState } from '../../styles/homework';
import { MarkStateOptions } from '../../styles/mark_state';

const ScreenTest = () => (
  <ScrollView style={{ flex: 1 }}>
    <MarkState state={MarkStateOptions.LOADING} />
    <HomeworkItem
      state={HomeworkState.ok}
      course="Curso de Matematica"
      date="2019-20-19"
    />
    <HomeworkFileItem course="hola" file="pdf" preview />
  </ScrollView>
);

export default ScreenTest;
