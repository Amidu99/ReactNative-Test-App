import {Button, View, Text, Alert} from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Check File-based routing with button</Text>
        <Button
        title="Check Details"
        color="#f194ff"
        onPress={() => router.push('details')}
      />
    </View>
  );
}
