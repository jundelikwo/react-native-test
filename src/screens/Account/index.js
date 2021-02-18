import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import LogoCircle from '../../../assets/logo-circle.svg';
import Line from '../../../assets/line.svg';
import Settings from '../../../assets/settings.svg';
import styles from './styles';

const Account = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.heading}>Account</Text>
            </View>
            <View style={styles.tabView}>
                <TouchableOpacity style={styles.profileBtn}>
                    <Text style={styles.profileText}>Profile</Text>
                    <Line />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsBtn}>
                    <Text style={styles.settingsText}>Settings</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.profileView}>
                    <Settings style={styles.settingsIcon} />
                    <View>
                        <Image source={require('../../../assets/profile-photo.png')} />
                        <View style={{position: 'absolute', bottom: 0, right: 0}}>
                            <LogoCircle />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.profileName}>Muheez Akanni</Text>
                        <Text style={styles.subText}>@creathor</Text>
                    </View>
                    <View style={styles.metrics}>
                        <View>
                            <Text style={styles.metricNo}>12</Text>
                            <Text style={styles.metricTitle}>Rooms</Text>
                        </View>
                        <View>
                            <Text style={styles.metricNo}>2,215</Text>
                            <Text style={styles.metricTitle}>Followers</Text>
                        </View>
                        <View>
                            <Text style={styles.metricNo}>12</Text>
                            <Text style={styles.metricTitle}>Following</Text>
                        </View>
                    </View>
                    <Text style={styles.metricTitle}>Photos</Text>
                    <View style={styles.photos}>
                        <Image source={require('../../../assets/photos1.png')} />
                        <Image source={require('../../../assets/photos2.png')} />
                        <Image source={require('../../../assets/photos3.png')} />
                    </View>
                    <Text style={styles.metricTitle}>Public Rooms</Text>
                    <View style={styles.rooms}>
                        <Image source={require('../../../assets/profile1.png')} />
                        <Image source={require('../../../assets/profile2.png')} />
                        <Image source={require('../../../assets/profile3.png')} />
                        <Image source={require('../../../assets/profile2.png')} />
                        <Image source={require('../../../assets/profile4.png')} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Account;
