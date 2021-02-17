import {Dimensions, StyleSheet} from 'react-native';

const {width: windomWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
    people: {
        width: 192,
        height: 96,
        marginTop: 55,
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
    },
    heading: {
        fontSize: 38,
        fontFamily: 'coolvetica rg',
        color: '#FFFFFF'
    },
    safeArea: {
        backgroundColor: '#00070F',
        height: '100%'
    },
    scrollViewContent: {
        alignItems: 'center',
        minHeight: '100%'
    },
    searchBtn: {
        width: 50,
        height: 50,
        backgroundColor: '#0D131B',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        width: 114,
        height: 114,
        backgroundColor: '#00BF69',
        borderRadius: 57,
        justifyContent: 'center',
        alignItems: 'center',
        left: 39,
        bottom: 65,
    },
    btn: {
        backgroundColor: '#00BF69',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        width: windomWidth - 40,
    },
    btnText: {
        fontSize: 19,
        fontFamily: 'coolvetica rg',
    },
    subHeading: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: 'coolvetica rg',
        textAlign: 'center',
        paddingBottom: 16
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Lato',
        opacity: 0.5,
        width: windomWidth * 0.8,
        textAlign: 'center',
        marginBottom: 70,
        lineHeight: 24,
    }
});

export default styles;