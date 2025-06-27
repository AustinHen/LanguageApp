import { Button, StyleSheet, Text, View , Alert, TouchableOpacity} from 'react-native';
import styles from "./Style";

import GradientText from "./GradientText"
import { LinearGradient } from 'expo-linear-gradient';


export default function SmallCard(){
    return <View style={styles.smallCard}> 
        <View> 
            <GradientText text={"Word"} fontSize={26} startColor={'#FF0099'} endColor={'#ED92C4'}/>
        </View>
        <View style={styles.hLine}/>
        <Text style={styles.smallCardP}>dumb text or whatever</Text>

        <TouchableOpacity style={styles.gradientButtonCont}>
            <LinearGradient colors={['#ff0099', '#ED92C4']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradientButton}/>
        </TouchableOpacity>

    </View>
    
}
