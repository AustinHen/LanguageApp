import { Text, SafeAreaView } from "react-native";
import { LineChart } from 'react-native-chart-kit'; //god I hate dep
import MirrorPage from "./Mirror"
import styles from "./Style"

export default function Index() {
    /*todo add some form of padding for the wierd camera hole  (idk styling yet)*/
  return (
    <SafeAreaView style={styles.index}>
        <MirrorPage/>
    </SafeAreaView>
  );
}
