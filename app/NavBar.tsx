import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from "./Style"


export default function NavBar(props){
    return <View style={styles.navBar}>
        <Button color='white' title="Mirror Page"/>
        <Button color= 'white'title= "Audio Page"/>
    </View>
} 
