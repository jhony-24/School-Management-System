import * as React from 'react';
import { View } from 'react-native';
import Text from '../../../components/atoms/Text';
import { Fonts } from '../../../styles/font';
import { HomeworkItemDivider, ListHomeworks } from './style';
import HomeworkItem from '../../../components/molecules/HomeworkItem';
import { HomeworkState } from '../../../styles/homework';
import SearchBar from '../../../components/molecules/SearchBar';

const Homeworks = () => (
  <View>
    <SearchBar />
    <Text weight={Fonts.BOLD}>21 resultados</Text>
    <ListHomeworks>
      <HomeworkItemDivider>
        <HomeworkItem course="Matematica" state={HomeworkState.ok} date="now" />
      </HomeworkItemDivider>
    </ListHomeworks>
  </View>
);

export default Homeworks;
