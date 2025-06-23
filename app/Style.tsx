//This is just the css sheet -> idk why they dont parse css 
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    index: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10,
    },

    cameraCont: {
        height: '50%',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#ccc',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    camera: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },

    //no empty ruleset lsp error for me :)
    mirrorPage: {
    }
});
