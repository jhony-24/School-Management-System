import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import RouterApplication from './src/router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <RouterApplication />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
