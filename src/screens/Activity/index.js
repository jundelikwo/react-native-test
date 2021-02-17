import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import Logo from '../../../assets/logo.svg';
import Alarm from '../../../assets/alarm.svg';
import styles from './styles';

const Activity = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Logo height={40} width={40} />
                <Text style={styles.heading}>Activity</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Image source={require('../../../assets/people.png')} style={styles.people} />
                    <View style={styles.iconView}>
                        <Alarm width={45} height={45} />
                    </View>
                </View>
                <View>
                    <Text style={styles.subHeading}>Nothing to see here</Text>
                    <Text style={styles.text}>You didn't made any conversation yet, please select</Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Go to Explore page</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Activity;
