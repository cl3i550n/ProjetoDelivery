import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1
    },

    backTextWhite: {
        color: '#FFF',
    },

    rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 80,
        margin: 5,
        marginBottom: 15,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },

    rowFrontVisible: {
        backgroundColor: '#c4c4c4',
        borderRadius: 5,
        height: '100%',
        padding: 20,
        marginBottom: 15,
    },

    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
    },

    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },

    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    },

    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },

    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
    },

    details: {
        fontSize: 14,
        color: '#000'

    },
});
