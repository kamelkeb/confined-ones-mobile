import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

const ColorScreen = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.myDiv} />
            <View style={styles.myDiv} />
            <View style={{ ...styles.myDiv, backgroundColor: 'red' }} />
            <View style={styles.myDiv} />
            <View style={styles.myDiv} />
            <View style={styles.myDiv} />
            <View style={styles.myDiv} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    myDiv: {
        height: 60,
        width: 60,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'grey',
        margin: 15
    }
});

export default ColorScreen;
