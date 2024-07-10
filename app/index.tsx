import TextInputExample from "@/components/TextInputExample";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Check TextInputs</Text>
      <TextInputExample></TextInputExample>
    </View>
  );
}
