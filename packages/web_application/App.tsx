import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import RouterApplication from './src/router';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <RouterApplication />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
