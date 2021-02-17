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
import Search from '../../../assets/search.svg';
import Headphone from '../../../assets/headphone.svg';
import styles from './styles';

const Rooms = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Logo height={40} width={40} />
                <Text style={styles.heading}>Rooms</Text>
                <TouchableOpacity style={styles.searchBtn}>
                    <Search width={15} height={15} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Image source={require('../../../assets/people.png')} style={styles.people} />
                    <View style={styles.iconView}>
                        <Headphone width={45} height={45} />
                    </View>
                </View>
                <View>
                    <Text style={styles.subHeading}>No Rooms</Text>
                    <Text style={styles.text}>You didn't made any conversation yet, please select</Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Create a fun room</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Rooms;
