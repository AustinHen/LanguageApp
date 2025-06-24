//This is just the css sheet -> idk why they dont parse css 
import { StyleSheet } from 'react-native';

const darkColor = '#1c1d22'; 
const mediumColor = '#26272e';

export default StyleSheet.create({
    index: {
        backgroundColor: darkColor,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    cameraCont: {
        height: 180,
        padding: 14,
        borderRadius: 10,
        backgroundColor: mediumColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    camera: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 7,
    },

    mirrorPage: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
    },

    mirrorVideo: {
        borderRadius: 10,
        backgroundColor: mediumColor,
        marginBottom: 10,
        padding: 80, //delete later just for layout till video comes in
    },
});
