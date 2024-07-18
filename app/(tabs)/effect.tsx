import React,{useEffect, useState} from 'react';
import {Button, View, StyleSheet, Text, TextInput, Alert} from 'react-native';

export default function effect() {
    const [stateValue, changeState] = useState(0);
    useEffect(() => {
        console.log('stateValue : '+stateValue);
        // optional return function (cleaning part)
        return()=> {
            console.log('Test Log');
        } 
      },[stateValue]); // dependency array
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Text>Check use state</Text>
            <Text>{stateValue}</Text>
            <Button
                title="+"
                color="#f194ff"
                onPress={() => {changeState(stateValue+1)}}
            />
            <Button
                title="-"
                color="#f194ff"
                onPress={() => {changeState(stateValue-1)}}
            />

            <Text>Check Use Effect</Text>
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