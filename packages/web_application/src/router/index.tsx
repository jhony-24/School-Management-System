import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// import DefaultStack from './native/DefaultStack';
import AuthStack from './native/AuthStack';

const RouterApplication = () => (
  <NavigationContainer>
    <AuthStack />
    {/* <DefaultStack /> */}
  </NavigationContainer>
);

export default RouterApplication;
