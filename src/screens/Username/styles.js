import {Dimensions, StyleSheet} from 'react-native';

const {width: windomWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 20,
    },
    heading: {
        fontSize: 24,
        fontFamily: 'coolvetica rg',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    subText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'Lato',
        opacity: 0.5,
        textAlign: 'center',
        marginTop: 6,
        lineHeight: 24,
    },
    safeArea: {
        backgroundColor: '#00070F',
        height: '100%'
    },
    keyboardView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
    },
    atText: {
        color: '#FFFFFF',
        fontSize: 32,
        fontFamily: 'coolvetica rg',
    },
    input: {
        color: '#FFFFFF',
        opacity: 0.5,
        fontSize: 32,
        fontFamily: 'coolvetica rg',
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#00BF69',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        width: windomWidth - 40,
        marginBottom: 80,
    },
    btnText: {
        fontSize: 19,
        fontFamily: 'coolvetica rg',
    },
});

export default styles;