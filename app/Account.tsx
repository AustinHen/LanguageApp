import { Button, StyleSheet, Text, View , Alert, TouchableOpacity} from 'react-native';
import styles from "./Style";

export default function Account(props){
    return <View>
        <View style={styles.pageHeader}>
            <View style={{width: 40}}></View>
            <Text style={styles.pageTitle}>Account</Text>
            <TouchableOpacity style={styles.headerButton}></TouchableOpacity>
        </View>
    </View>
    
}
