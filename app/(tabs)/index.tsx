import React from 'react';
import {Button, View, StyleSheet, Text, TextInput} from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  const [email, onChangeEmail] = React.useState('user@sample.com');
  const [name, onChangeName] = React.useState('');
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="enter your name"
      />
        <Text>Check Tab-Navigation &</Text>
        <Text>Flatlist-selectable</Text>
        <Button
        title="Check Details"
        color="#f194ff"
        onPress={() => router.push('details')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});