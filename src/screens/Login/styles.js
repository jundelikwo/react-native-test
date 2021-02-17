import {Dimensions, StyleSheet} from 'react-native';

const {width: windomWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 20,
        paddingLeft: 20,
    },
    subText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'Lato',
        opacity: 0.5,
        textAlign: 'center',
        lineHeight: 20,
        paddingBottom: 25,
    },
    safeArea: {
        backgroundColor: '#00070F',
        height: '100%'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
    },
    btn: {
        backgroundColor: '#00BF69',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        width: windomWidth - 40,
        marginBottom: 15,
    },
    btnText: {
        fontSize: 19,
        fontFamily: 'coolvetica rg',
        color: '#000000'
    },
    login: {
        textDecorationLine: 'underline'
    },
    heading: {
        fontSize: 32,
        fontFamily: 'coolvetica rg',
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 30,
    },
    whiteText: {
        color: '#FFFFFF'
    },
    imageView: {
        position: 'absolute',
        top: 0,
    },
    image: {
        aspectRatio: 0.87
    }
});

export default styles;