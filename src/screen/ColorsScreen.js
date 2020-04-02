import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const ColorScreen = (props) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            <View style={styles.myDiv} />
            <View style={styles.myDiv} />
            <View
                style={{
                    ...styles.myDiv,
                    backgroundColor: 'red',
                    alignSelf: 'flex-start',
                    width: '40%',
                    height: 90
                }}
            />
            <View style={styles.myDiv} />
            <View style={styles.myDiv} />
            <View style={styles.myDiv}>
                {/* Exemple d'usage d'image, le "require" est nécessaire! */}
                <Image source={require('../assets/image.png')} alt="Un petit bout" />
            </View>
            {/* top, left, right et bootom, lorsqu'utilisés conjointement avec une position
        absolute vont spécfier l'espace que l'on veut avoir les différents cotés */}
            <View style={{ ...styles.myDiv, position: 'absolute', top: 0, right: 10 }}>
                <Text>Dernier</Text>
            </View>
        </SafeAreaView>
    );
};

// Parfois une vue (ou un composant quelconque) n'occupera pas tout l'espace
// alors qu'on voudra le voir occuper tout l'espace
// Il suffira de lui donner comme style: {position:'absolute', top:0, right:0, left:0, bottom:0}
// C'est tellement commun come use case que ...StyleSheet.absoluteFillObject
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
