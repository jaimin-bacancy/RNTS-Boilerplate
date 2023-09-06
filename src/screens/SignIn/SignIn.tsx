import { strings } from '@/translations';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './SignIn.styles';

export function SignIn(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{strings.formatString(strings.helloUser, 'RNTS-Boilerplate')}</Text>
    </View>
  );
}
