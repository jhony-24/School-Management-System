import * as React from 'react';
import { Text, View } from 'react-native';
import HomeworkFileItem from '../../components/molecules/HomeworkFileItem';

const Home = () => (
  <View>
    <Text>Hola que tal jhony</Text>
    <HomeworkFileItem
      file="https://cdn.pixabay.com/photo/2021/08/08/15/45/mountains-6531264_960_720.jpg"
      course="Tarea de matematica"
      preview
    />
  </View>
);

export default Home;
