import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        width: '100%',
        paddingLeft: 20,
    },
    heading: {
        fontSize: 38,
        fontFamily: 'coolvetica rg',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    safeArea: {
        backgroundColor: '#00070F',
        height: '100%'
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    profileText: {
        fontFamily: 'Lato',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    profileBtn: {
        alignItems: 'center',
        paddingRight: 20,
    },
    settingsText: {
        fontFamily: 'Lato',
        color: 'rgba(255, 255, 255, .5)',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    settingsBtn: {
        paddingLeft: 20,
    },
    tabView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 22,
    },
    profileView: {
        backgroundColor: '#0D131B',
        width: '90%',
        alignItems: 'center',
        paddingVertical: 32,
        borderRadius: 32,
        marginBottom: 50,
    },
    settingsIcon: {
        right: 40,
        top: 32,
        position: 'absolute'
    },
    profileName: {
        fontSize: 24,
        marginTop: 24,
        fontFamily: 'coolvetica rg',
        color: '#FFFFFF'
    },
    subText: {
        fontFamily: 'Lato',
        fontSize: 16,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.5)',
        paddingBottom: 16,
        lineHeight: 24
    },
    metrics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 40,
        paddingBottom: 35
    },
    metricNo: {
        fontFamily: 'coolvetica rg',
        fontSize: 28,
        lineHeight: 33.6,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    metricTitle: {
        fontFamily: 'coolvetica rg',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.5)'
    },
    rooms: {
        flexDirection: 'row',
        marginTop: 16,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 32
    },
    photos: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 54,
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        width: '100%'
    }
});

export default styles;