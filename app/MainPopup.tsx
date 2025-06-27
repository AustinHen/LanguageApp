import GradientText from './GradientText'
import { Button, StyleSheet, Text, View , Alert, TouchableOpacity, Modal } from 'react-native';
import styles from "./Style";
import { BlurView } from 'expo-blur';


export default function MainPopUp(){
    return <Modal transparent={true} animationType="fade">
        <BlurView intensity={10} tint="dark" style={StyleSheet.absoluteFill} />
        <View style={styles.MainPopUp}> 
            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', padding: 7}}> 
                <View style={{flex:1}}>
                    <GradientText  text={"Word"} fontSize={35} startColor={'#FF0099'} endColor={'#ED92C4'}/>
                </View>
                <View style={styles.headerButton}/>
            </View>

            <View style={styles.popUpNav}>
                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.navBarButton}>Info</Text> 
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.navBarButton}>Rough</Text> 
                    </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.navBarButton}>Hearing</Text> 
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.navBarButton}>Assess</Text> 
                </TouchableOpacity>
            </View>


            <View style={{flex:1, display:'flex', justifyContent: 'flex-end',}}>
            <Text style={{margin: 10, fontSize: 15,}}>Self Rating:</Text> 
            <View style={styles.selfAssessBar}>
                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.navBarButton}>Again</Text> 
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.navBarButton}>Hard</Text> 
                    </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.navBarButton}>Good</Text> 
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.navBarButton}>Easy</Text> 
                </TouchableOpacity>
            </View>
            </View>
        </View>
    </Modal>
}
