import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screens/native/Home';
import Calendar from '../../screens/native/Calendar';
import FilePreview from '../../screens/native/FilePreview';
import Homeworks from '../../screens/native/Homeworks';
import HomeworkSend from '../../screens/native/HomeworkSend';
import Profile from '../../screens/native/Profile';
import Publications from '../../screens/native/Publications';
import PublicationDetail from '../../screens/native/PublicationDetail';

import ScreenTest from '../../screens/native/Test';

import DrawerMenu from '../../components/templates/DrawerMenu';

const Drawer = createDrawerNavigator();

const RouterApplication = () => (
  <Drawer.Navigator
    initialRouteName="Test"
    drawerContent={DrawerMenu}
    sceneContainerStyle={{ backgroundColor: '#fff' }}
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Calendar" component={Calendar} />
    <Drawer.Screen name="File-Preview" component={FilePreview} />
    <Drawer.Screen name="Homeworks" component={Homeworks} />
    <Drawer.Screen name="Homework-Send" component={HomeworkSend} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Publications" component={Publications} />
    <Drawer.Screen name="Publication-Detail" component={PublicationDetail} />
    <Drawer.Screen name="Test" component={ScreenTest} />
  </Drawer.Navigator>
);

export default RouterApplication;
