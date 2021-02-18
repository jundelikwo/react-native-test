import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    peopleText: {
        fontFamily: 'Lato',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
    },
    peopleBtn: {
        alignItems: 'center',
        paddingRight: 20,
    },
    roomsText: {
        fontFamily: 'Lato',
        color: 'rgba(255, 255, 255, .5)',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
    },
    roomsBtn: {
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
        paddingHorizontal: 40,
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
        paddingBottom: 32
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
        marginBottom: 32
    },
    unfollowText: {
        fontFamily: 'coolvetica rg',
        color: '#00BF69',
        lineHeight: 22.8,
        fontSize: 19
    },
    unfollowBtn: {
        borderColor: '#00BF69',
        height: 52,
        width: 133,
        borderRadius: 32,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;