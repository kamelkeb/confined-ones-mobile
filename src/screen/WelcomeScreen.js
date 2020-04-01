import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

const WelcomeScreen = (props) => {
    return <Text style={styles.text}>Bienvenue chère utilisiatrice!</Text>;
};

const styles = StyleSheet.create({
    text: { fontSize: 38 }
});
