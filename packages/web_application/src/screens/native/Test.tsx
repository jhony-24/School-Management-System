import * as React from 'react';
import { View } from 'react-native';

//
import { ButtonComponent } from '../../components/atoms/Button';
import { Paragraph } from '../../components/atoms/Paragraph/style';
import { Image } from '../../components/atoms/Image';
import Fonts from '../../config/font';

const HandleButton = () => console.log('Pressed me.');

const ScreenTest = () => (
  <View style={{
    justifyContent: 'space-around', alignContent: 'space-around', flex: 1, backgroundColor: 'black',
  }}
  >
    <Paragraph color="blue" size="small" font={Fonts.REGULAR}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Tempora ipsam optio accusamus quo, aliquid ea! Voluptas amet
      saepe fuga! Laudantium exercitationem eius assumenda voluptates
      repellat harum quibusdam sunt facere inventore.
    </Paragraph>
    <Paragraph color="red" size="normal" font={Fonts.BOLD}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Tempora ipsam optio accusamus quo, aliquid ea! Voluptas amet
      saepe fuga! Laudantium exercitationem eius assumenda voluptates
      repellat harum quibusdam sunt facere inventore.
    </Paragraph>
    <Paragraph color="red" size="normal" font={Fonts.EXTRA_BOLD}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Tempora ipsam optio accusamus quo, aliquid ea! Voluptas amet
      saepe fuga! Laudantium exercitationem eius assumenda voluptates
      repellat harum quibusdam sunt facere inventore.
    </Paragraph>
    <Paragraph color="black" size="big" font={Fonts.BLACK}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Tempora ipsam optio accusamus quo, aliquid ea! Voluptas amet
      saepe fuga! Laudantium exercitationem eius assumenda voluptates
      repellat harum quibusdam sunt facere inventore.
    </Paragraph>
    <ButtonComponent text="ENTREGAR TAREAS" size="normal" onPress={HandleButton} color="red" />
    <ButtonComponent text="ENTREGAR TAREAS" size="normal" onPress={HandleButton} color="blue" ghost />
    <ButtonComponent text="ENTREGAR TAREAS" size="small" onPress={HandleButton} color="red" />
    <ButtonComponent text="ENTREGAR TAREAS" size="small" onPress={HandleButton} color="blue" opacity />
    <View style={{ width: 400, height: 200 }}>
      <Image resizeContain source="https://pbs.twimg.com/media/E4gSE7eXMAIF2TK.png" />
    </View>
    <View style={{ width: 400, height: 200 }}>
      <Image source="https://pbs.twimg.com/media/E4gSE7eXMAIF2TK.png" />
    </View>
  </View>
);

export default ScreenTest;
