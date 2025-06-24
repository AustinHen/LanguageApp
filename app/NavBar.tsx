import { Button, StyleSheet, Text, View , Alert, TouchableOpacity} from 'react-native';
import styles from "./Style";

import {Pages} from "./index";

 
export default function NavBar(props){
    const {setCurPage} = props;
    return <View style={styles.navBar}>
        <TouchableOpacity onPress={()=>setCurPage(Pages.MirrorPage)}>
            <Text>Mirror Page</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>setCurPage(Pages.AudioPage)}>
            <Text>Audio Page</Text>
        </TouchableOpacity>
    </View>
} 
