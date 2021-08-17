import * as React from 'react';
import { View, ScrollView } from 'react-native';

import Text from '../../components/atoms/Text';
import Image from '../../components/atoms/Image';
import Button from '../../components/atoms/Button';
import HorizontalLimitator from '../../components/atoms/HorizontalLimitator';

import { Fonts } from '../../styles/font';
import { TColor } from '../../styles/text';
import { BColor } from '../../styles/button';

const ScreenTest = () => (
  <ScrollView>
    <HorizontalLimitator>
      <Text color={TColor.BLUE} weight={Fonts.REGULAR}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ipsam
        optio accusamus quo, aliquid ea! Voluptas amet saepe fuga! Laudantium
        exercitationem eius assumenda voluptates repellat harum quibusdam sunt
        facere inventore.
      </Text>
      <Text color={TColor.RED} weight={Fonts.BOLD}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ipsam
        optio accusamus quo, aliquid ea! Voluptas amet saepe fuga! Laudantium
        exercitationem eius assumenda voluptates repellat harum quibusdam sunt
        facere inventore.
      </Text>
      <Button text="ENTREGAR TAREAS" color={BColor.RED} />
      <Button text="ENTREGAR TAREAS" ghost />
      <Button text="ENTREGAR TAREAS" color={BColor.BLUE} />
      <Button text="ENTREGAR TAREAS" disabled />
      <View style={{ width: '100%', height: 200 }}>
        <Image source="https://pbs.twimg.com/media/E4gSE7eXMAIF2TK.png" />
      </View>
    </HorizontalLimitator>
  </ScrollView>
);

export default ScreenTest;
