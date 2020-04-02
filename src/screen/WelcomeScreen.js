import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

// Chaque screen (mis sous Navigation container) recevram parmi les props
// un objet nommé navigation
const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text style={styles.text}>Bienvenue chère utilisiatrice!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllMessages')}>
                <Text style={styles.clickable}>Voir tous les messages</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: { fontSize: 38 },
    clickable: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
        padding: 5
    }
});

export default WelcomeScreen;
