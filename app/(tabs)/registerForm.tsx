import React from 'react';
import {Button, View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import { router } from 'expo-router';

type UserData = {
    email: string;
    name: string;
    password: string;
}

export default function Form() {
  const [email, onChangeEmail] = React.useState('user@sample.com');
  const [name, onChangeName] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  
  function registerUser() {
    if(email && name && password){
        Alert.alert('ok.');
    }else{
        Alert.alert('Fields can not be empty.');
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Sample Register Form</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="enter your email"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="enter your name"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="enter your password"
            secureTextEntry={true}
        />
        <Button
            title="SignIn"
            color="#f194ff"
            onPress={() => registerUser()}
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