import { Button, View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button
        title="Back to Home"
        color="#f194ff"
        onPress={() => router.back()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});