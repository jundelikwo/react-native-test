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
import Message from '../../../assets/message.svg';
import styles from './styles';

const Messages = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Logo height={40} width={40} />
                <Text style={styles.heading}>Messages</Text>
                <TouchableOpacity style={styles.searchBtn}>
                    <Search width={15} height={15} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Image source={require('../../../assets/people.png')} style={styles.people} />
                    <View style={styles.iconView}>
                        <Message width={45} height={45} />
                    </View>
                </View>
                <View>
                    <Text style={styles.subHeading}>No Messages</Text>
                    <Text style={styles.text}>You didn't made any conversation yet, please select</Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Start a conversaiton</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Messages;
