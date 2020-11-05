import { useState } from '@hookstate/core';
import * as React from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { globalAuthState } from '../components/Auth';

import { Text, View } from '../components/Themed';

export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const authState = useState(globalAuthState);

  function signIn(token: string) {
    authState.isSignout.set(false);
    authState.userToken.set(token);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn('dummy-auth-token')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
