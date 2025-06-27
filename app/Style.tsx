//This is just the css sheet -> idk why they dont parse css 
import { StyleSheet } from 'react-native';
import SmallCard from './SmallCard';
import MainPopUp from './MainPopup';

const background = '#fbfbfb'; 
const forground = '#ffffff';
const midText ='#686868';
const lightColor = '#9f9f9f';
const veryLight = '#cccccc';

export default StyleSheet.create({
    index: {
        backgroundColor: background,
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
        marginBottom: 10,
        padding: 80, //delete later just for layout till video comes in
    },

    navBar: {
        position: 'absolute',
        bottom: 30, 
        left: 0,
        right: 0,
        marginHorizontal: 20, 
        padding: 15,
        paddingVertical: 17,
        backgroundColor: forground, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        zIndex: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,

        elevation: 8,
    },

    navBarButton:{
        fontWeight: 800,
        fontSize: 15,
        color: midText,
    },

    pageHeader: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
    },

    pageTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: midText,
        textAlign: 'center',
    },

    headerButton: {
        backgroundColor: forground,
        borderRadius: 100,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        width: 40,
        height: 40,

        elevation: 8,

    },

    browseResults: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: 10,
        margin: 25,
    },
    
    smallCard: {
        width: '49%',
        height: 200,
        backgroundColor: forground,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 5,

        elevation: 8,
        display: 'flex',
        borderRadius: 15,
        padding: 15,
        zIndex: 5,
    },

    hLine: {
        height: 2,
        backgroundColor: veryLight, 
        width: '80%',
    },

    smallCardP: {
        marginLeft: 10,
        marginTop: 10,
        color: veryLight,
        fontWeight: 700,
        flex: 1,
    }, 

    gradientButtonCont: {
        alignSelf: 'flex-end',  
        shadowColor: '#000',
    },

    gradientButton: {
        width: 40,
        height: 40,
        borderRadius: 100,

    },

    MainPopUp: {
        position: 'absolute',
        top: '8%',
        left: '5%',
        right: '5%',
        height: '85%',
        backgroundColor: '#F9f9f9',
        padding: 20,
        borderRadius: 30,
    },

    popUpNav: {
        marginHorizontal: 10, 
        padding: 12,
        paddingVertical: 17,
        backgroundColor: forground, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        zIndex: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,

        elevation: 8,
    },

    selfAssessBar: {
        marginHorizontal: 10, 
        marginBottom: 10,
        padding: 12,
        paddingVertical: 17,
        backgroundColor: forground, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 15,
        zIndex: 10,


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,

        elevation: 8,
    }, 




});
