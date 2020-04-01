import React, { useState } from 'react';
import { StyleSheet, TextInput, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

const LoginScreen = (props) => {
    const [ username, setusername ] = useState('');

    return (
        <SafeAreaView>
            <TextInput style={styles.inputText} value={username} onChangeText={(e) => setusername(e.target.value)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputText: {
        fontSize: 24,
        width: 180,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5
    }
});

export default LoginScreen;
