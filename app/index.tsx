import { Text, View } from "react-native";
import { LineChart } from 'react-native-chart-kit'; //god I hate dep

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
