import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    /* styles for main header */
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* custom styles for one header */}
      <Stack.Screen name="index" options={{headerTitle:'Home', headerShown:false}}/>
      <Stack.Screen name="details" options={{headerStyle: {backgroundColor: 'blue'}}}/>
    </Stack>
  );
}
