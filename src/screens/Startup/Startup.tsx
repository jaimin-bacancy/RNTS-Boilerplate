import { resetRoot } from '@/navigators/NavigationRef';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './Startup.styles';

export function Startup(): JSX.Element {
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    resetRoot('AuthNavigator', 'SignIn');
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
}
