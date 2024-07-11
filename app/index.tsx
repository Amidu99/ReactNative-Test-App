import CheckModal from "@/components/CheckModal";
import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Check File-based routing</Text>
      <Link href="/details">View details</Link>
    </View>
  );
}
