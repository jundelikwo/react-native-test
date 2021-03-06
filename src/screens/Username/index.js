import React, {useState} from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './styles';

const Username = () => {
    const [username, setUsername] = useState('');

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.keyboardView}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Create username</Text>
                    <Text style={styles.subText}>Please create your username to continue</Text>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.atText}>@</Text>
                    <TextInput
                        autoFocus
                        placeholder='username'
                        placeholderTextColor="#FFFFFF"
                        style={styles.input}
                        onChangeText={setUsername}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={Actions.home}>
                    <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default Username;
