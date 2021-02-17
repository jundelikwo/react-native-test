import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import Logo from '../../../assets/logo.svg';
import styles from './styles';

const Login = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <View style={styles.imageView}>
                    <Image source={require('../../../assets/login.png')} style={styles.image} />
                </View>
                <View style={styles.header}>
                    <Logo height={40} width={40} />
                </View>
                <View>
                    <Text style={styles.heading}>Meet <Text style={styles.whiteText}>ear1</Text>,</Text>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#171817'}]}>
                        <Text style={[styles.btnText, {color: '#FFFFFF'}]}>Login / Sign Up with Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Sign Up with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: '#11ADFF'}]}>
                        <Text style={[styles.btnText, {color: '#FFFFFF'}]}>Sign Up with Twitter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.subText}>Have an account? <Text style={styles.login}>Login</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Login;
