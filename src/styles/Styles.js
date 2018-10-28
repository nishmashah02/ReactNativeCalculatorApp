import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    displayCont: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputCont: {
        flex: 8,
        backgroundColor: '#3E606F'
    },

    inputComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputBtnText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    inputButtonHighlighted: {
        backgroundColor: '#193441'
    }
});

export default Style;