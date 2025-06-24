import { Text, SafeAreaView, View } from "react-native";
import { useState } from 'react';
import { LineChart } from 'react-native-chart-kit'; //god I hate dep
import MirrorPage from "./Mirror"
import styles from "./Style"
import NavBar from "./NavBar"
import Header from "./Header"

export enum Pages{
    MirrorPage,
    AudioPage,
}

export default function Index() {
    /*todo add some form of padding for the wierd camera hole  (idk styling yet)*/
    const [curPage, setCurPage] = useState(Pages.MirrorPage);

    const RenderPage = () => {
        switch (curPage){
            case Pages.MirrorPage:
                 return <MirrorPage/>
            case Pages.AudioPage: 
                return <View><Text>AUDIO PAGE</Text></View>
            default: 
                return <View> </View>
        }
    }


    return (
        <SafeAreaView style={styles.index}>
            {RenderPage()}
            <NavBar setCurPage={setCurPage}/>
        </SafeAreaView>


    );
}
