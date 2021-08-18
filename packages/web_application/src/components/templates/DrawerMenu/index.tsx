import * as React from 'react';
import { Text } from 'react-native';
import {
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

type DrawerPropsType = DrawerContentComponentProps<DrawerContentOptions>;

const DrawerMenu = (props: DrawerPropsType) => (
  <DrawerContentScrollView {...props}>
    <Text>Custom Drawer Menu</Text>
  </DrawerContentScrollView>
);

export default DrawerMenu;
