import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

// pour récupérer des paramètres de la route, on récupère déjà
// la props route
const LoginScreen = ({ route }) => {
    const [ username, setusername ] = useState(route.params.username);
    const [ password, setPassword ] = useState('');

    return (
        <SafeAreaView>
            <Text>Veuillez saisir votre nom s'il vous plaît</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputText}
                value={username}
                placeholder={username}
                onChangeText={setusername}
            />
            <Text>Veuillez saisir votre mot de passe s'il vous plaît</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputText}
                value={password}
                onChangeText={setPassword}
            />
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
