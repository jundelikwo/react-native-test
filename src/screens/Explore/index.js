import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../../../assets/logo.svg';
import LogoCircle from '../../../assets/logo-circle.svg';
import Search from '../../../assets/search.svg';
import Line from '../../../assets/line.svg';
import styles from './styles';

const Explore = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Logo height={40} width={40} />
                <Text style={styles.heading}>Explore</Text>
                <TouchableOpacity style={styles.searchBtn}>
                    <Search width={15} height={15} />
                </TouchableOpacity>
            </View>
            <View style={styles.tabView}>
                <TouchableOpacity style={styles.peopleBtn}>
                    <Text style={styles.peopleText}>People</Text>
                    <Line />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roomsBtn} onPress={Actions.rooms}>
                    <Text style={styles.roomsText}>Rooms</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.profileView}>
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
                    <Text style={styles.metricTitle}>Public Rooms</Text>
                    <View style={styles.rooms}>
                        <Image source={require('../../../assets/room1.png')} style={{marginLeft: 40}} />
                        <Image source={require('../../../assets/room2.png')} style={{left: -10}} />
                        <Image source={require('../../../assets/room3.png')} style={{left: -20}} />
                        <Image source={require('../../../assets/room2.png')} style={{left: -30}} />
                        <Image source={require('../../../assets/room4.png')} style={{left: -40}} />
                    </View>
                    <TouchableOpacity style={styles.unfollowBtn}>
                        <Text style={styles.unfollowText}>Unfollow</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Explore;
