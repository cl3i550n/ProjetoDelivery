import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#007f5f'
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    logo: {
        width: '80%',
        height: '50%',
    },

    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },

    text: {
        color: 'grey',
        marginTop: 5
    },

    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },

    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },

    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },

    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },

    color_textPrivate: {
        color: 'grey'
    }

});