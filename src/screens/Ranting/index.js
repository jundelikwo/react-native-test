import React from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import RantingSVG from '../../../assets/ranting.svg';
import styles from './styles';

const Ranting = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.heading}>You’re all set</Text>
                </View>
                <View style={styles.imagesView}>
                    <View style={styles.imageRow}>
                        <Image source={require('../../../assets/ranting1.png')} style={styles.imageTopLeft} />
                        <Image source={require('../../../assets/ranting2.png')} style={styles.imageTopRight} />
                    </View>
                    <View style={styles.imageRow}>
                        <Image source={require('../../../assets/ranting3.png')} style={styles.centerImage} />
                    </View>
                    <View style={styles.imageRow}>
                        <Image source={require('../../../assets/ranting4.png')} style={styles.imageBottomLeft} />
                        <Image source={require('../../../assets/ranting5.png')} style={styles.imageBottomRight} />
                    </View>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn}>
                        <RantingSVG width={34} height={12} />
                        <Text style={styles.btnText}>Start ranting</Text>
                    </TouchableOpacity>
                    <Text style={styles.subText}>Start ranting with friends, create groups have fun…</Text>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Ranting;
