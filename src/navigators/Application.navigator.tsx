import { navigationRef } from '@/navigators/NavigationRef';
import { Startup } from '@/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AuthNavigator } from './Auth.navigator';
import { AuthorizedNavigator } from './Authorized.navigator';

type ApplicationStackParamList = {
  Startup: undefined;
  AuthNavigator: undefined;
  AuthorizedNavigator: undefined;
};

const Stack = createStackNavigator<ApplicationStackParamList>();

export function ApplicationNavigator() {
  const darkMode = useColorScheme() == 'dark';

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen
          name="AuthorizedNavigator"
          component={AuthorizedNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
