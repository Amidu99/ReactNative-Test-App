import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerStyle: {backgroundColor: 'blue'}}}/>
      <Tabs.Screen name="details" options={{headerStyle: {backgroundColor: 'red'}}}/>
      <Tabs.Screen name="camera" options={{headerStyle: {backgroundColor: 'green'}}}/>
    </Tabs>
  );
}
