import * as React from 'react';
import { Text, View } from 'react-native';
import MarkState from '../../components/molecules/MarkState';
import { MarkStateOptions } from '../../styles/markState';

const Home = () => (
  <View>
    <Text>Hola que tal jhony</Text>
    <MarkState state={MarkStateOptions.BAD} />
    <MarkState state={MarkStateOptions.LOCK} />
    <MarkState state={MarkStateOptions.LOADING} />
    <MarkState state={MarkStateOptions.Ok} />
  </View>
);

export default Home;
