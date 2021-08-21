import * as React from 'react';
import { View, ScrollView } from 'react-native';

import Text from '../../components/atoms/Text';
import Image from '../../components/atoms/Image';
import Button from '../../components/atoms/Button';
import HorizontalLimitator from '../../components/atoms/HorizontalLimitator';

import { Fonts } from '../../styles/font';
import { TColor } from '../../styles/text';
import { BColor } from '../../styles/button';

import FormControl from '../../components/molecules/FormControl';
import { IconType } from '../../styles/icons';

const ScreenTest = () => (
  <ScrollView style={{backgroundColor:'black'}}>
    <FormControl 
      icon={IconType.ID_CARD} 
      labelText="Documento nacional de identidad (DNI)" />
    <FormControl 
      icon={IconType.ID_CARD} 
      labelText="Contraseña" 
      type="password" />
  </ScrollView>
);

export default ScreenTest;
