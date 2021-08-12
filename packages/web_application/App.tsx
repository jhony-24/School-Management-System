import 'react-native-gesture-handler';

import * as React from 'react';
import * as Font from 'expo-font';

import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import RouterApplication from './src/router';
import AppError from './src/components/templates/AppError';
import SourceLoading from './src/components/templates/SourceLoading';
import ScreenLimitator from './src/components/atoms/ScreenLimitator';

import Fonts from './src/config/font';

export default function App() {
  const [loaded, error] = Font.useFonts({
    [Fonts.LIGHT]: require('./src/assets/fonts/Raleway-Light.ttf'),
    [Fonts.REGULAR]: require('./src/assets/fonts/Raleway-Regular.ttf'),
    [Fonts.MEDIUM]: require('./src/assets/fonts/Raleway-Medium.ttf'),
    [Fonts.SEMI_BOLD]: require('./src/assets/fonts/Raleway-SemiBold.ttf'),
    [Fonts.BOLD]: require('./src/assets/fonts/Raleway-Bold.ttf'),
    [Fonts.EXTRA_BOLD]: require('./src/assets/fonts/Raleway-ExtraBold.ttf'),
    [Fonts.BLACK]: require('./src/assets/fonts/Raleway-Black.ttf'),
  });

  const screenInApp = React.useMemo(() => {
    if (error) return <AppError message={error.message} />;
    if (!loaded) return <SourceLoading />;

    return <RouterApplication />;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScreenLimitator>{screenInApp}</ScreenLimitator>
    </View>
  );
}
