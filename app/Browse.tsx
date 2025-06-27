import { Button, StyleSheet, Text, View , Alert, TouchableOpacity} from 'react-native';

import styles from "./Style";
import SmallCard from "./SmallCard"
import MainPopUp from './MainPopup';

export default function Broswe(props){
    return <View>
        <MainPopUp/>
        <View style={styles.pageHeader}>
            <View style={{width: 40}}></View>
            <Text style={styles.pageTitle}>Browse</Text>
            <TouchableOpacity style={styles.headerButton}></TouchableOpacity>
        </View>
        <View style={styles.browseResults}>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
        </View>

    </View>
 
}
