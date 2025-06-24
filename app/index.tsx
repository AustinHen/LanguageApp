import { Text, SafeAreaView } from "react-native";
import { LineChart } from 'react-native-chart-kit'; //god I hate dep
import MirrorPage from "./Mirror"
import styles from "./Style"
import NavBar from "./NavBar"
import Header from "./Header"

export default function Index() {
    /*todo add some form of padding for the wierd camera hole  (idk styling yet)*/
  return (
    <SafeAreaView style={styles.index}>
        <Header>
           <MirrorPage/>
        </Header>
        <NavBar/>
    </SafeAreaView>
  );
}
