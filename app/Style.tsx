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
        justifyContent: 'flex-start',
    },

    cameraCont: {
        height: 180,
        padding: 14,
        borderRadius: 15,
        backgroundColor: mediumColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',

        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 20,



        
    },

    camera: {
        overflow: 'hidden',
        flex:1, 
        borderRadius: 7,
    },

    mirrorPage: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
        flex: 1, 
    },

    mirrorVideo: {
        borderRadius: 15,
        backgroundColor: mediumColor,
        marginBottom: 10,
        padding: 80, //delete later just for layout till video comes in
    },

    navBar: {
        padding: 7,
        paddingBottom: 25,
        backgroundColor: mediumColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: '0%',
        left: '0%',
        width: '100%',
        zIndex: 10,
        pointerEvents: 'box-none',
    },

    headerCont: {
        flex: 1,
    },

    headerBar: {
        borderColor: '#ff21bc',
        borderWidth: 2,
        borderRadius: 50,
        padding: 15,

        margin: 10,
        backgroundColor: mediumColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        color: 'white',
    },
});
