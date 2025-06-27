import { Button, StyleSheet, Text, View , Alert, TouchableOpacity} from 'react-native';
import styles from "./Style";

import {Pages} from "./index";

 
export default function NavBar(props){
    return <View style={styles.navBar}>
        <TouchableOpacity onPress={()=>props.setCurPage(Pages.HomePage)}> <Text style={styles.navBarButton}>Home</Text> </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.setCurPage(Pages.LearnPage)}> <Text style={styles.navBarButton}>Learn</Text> </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.setCurPage(Pages.AccountPage)}> <Text style={styles.navBarButton}>Account</Text> </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.setCurPage(Pages.BrowsePage)}> <Text style={styles.navBarButton}>Browse</Text> </TouchableOpacity>
    </View>
} 
