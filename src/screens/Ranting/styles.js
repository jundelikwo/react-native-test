import {Dimensions, StyleSheet} from 'react-native';

const {width: windomWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 20,
        height: '10%'
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
    },
    safeArea: {
        backgroundColor: '#00070F',
        height: '100%'
    },
    content: {
        alignItems: 'center',
        // justifyContent: 'space-between',
        height: '100%'
    },
    btn: {
        backgroundColor: '#00BF69',
        height: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        width: windomWidth - 40,
        marginBottom: 25,
    },
    btnText: {
        paddingLeft: 15,
        fontSize: 19,
        fontFamily: 'coolvetica rg',
    },
    btnView: {
        height: '20%'
    },
    imagesView: {
        height: '70%',
        justifyContent: 'space-between',
        width: '100%'
    },
    imageRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageTopLeft: {
        height: 150,
        left: -30,
        width: 150,
        resizeMode: 'contain'
    },
    imageTopRight: {
        height: 150,
        right: -20,
        width: 150,
        marginTop: 10,
        resizeMode: 'contain'
    },
    imageBottomLeft: {
        height: 150,
        left: -38,
        width: 150,
        resizeMode: 'contain'
    },
    imageBottomRight: {
        height: 150,
        right: -38,
        width: 150,
        marginTop: 10,
        resizeMode: 'contain'
    },
    centerImage: {
        width: 200,
        height: 200,
        marginHorizontal: (windomWidth - 200) / 2,
        resizeMode: 'contain'
    }
});

export default styles;