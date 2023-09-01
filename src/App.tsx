/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ApplicationNavigator } from '@/navigators/Application.navigator';
import React from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ApplicationNavigator />
    </SafeAreaView>
  );
}

export default App;
