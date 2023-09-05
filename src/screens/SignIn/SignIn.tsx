import React from 'react';
import { Text, View } from 'react-native';
import Config from 'react-native-config';
import styles from './SignIn.styles';

export function SignIn(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{Config.TARGET}</Text>
    </View>
  );
}
