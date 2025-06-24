import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from "./Style"

export default function MirrorPage(){
    return <View style={styles.mirrorPage}>
        {Video()}
        <Mirror/>
    </View>
}

//this function killed the radio star
function Video(){
    return <View style={styles.mirrorVideo} >
        <Text>MEEEP MEEEP</Text>
    </View>
    
}

function Mirror() {
    const [facing, _] = useState<CameraType>('front');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
                <View>
                <Text>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
                </View>
               );
    }


    return (
            <View style={styles.cameraCont} pointerEvents="none">
            <CameraView style={styles.camera} facing={facing}  pointerEvents="none"/>
            </View>
            
           );
}
