import * as React from 'react';
import { View } from 'react-native';

import Text from '../atoms/Text';

import { Fonts } from '../../styles/font';
import { TSize } from '../../styles/text';

type TProps = {
  title: string;
  text: string;
};

const TitleText = ({ text, title }: TProps) => {
  return (
    <View>
      <View style={{ marginBottom: 2 }}>
        <Text weight={Fonts.BLACK} size={TSize.BIG}>
          {title}
        </Text>
      </View>
      <Text size={TSize.SMALL}>{text}</Text>
    </View>
  );
};

export default TitleText;
