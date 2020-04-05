import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Chaque screen (mis sous Navigation container) recevra parmi les props
// un objet nommé navigation
const WelcomeScreen = ({ navigation }) => {
    // Supposons que nous avons récupéré la donnée
    // du dernier utilisateur connecté sur l'app
    const username = 'martin';
    return (
        <SafeAreaView>
            <Text style={styles.text}>Bienvenue chère utilisiatrice!</Text>

            <TouchableOpacity onPress={() => navigation.navigate('AllMessages')}>
                <Text style={styles.clickable}>Voir tous les messages</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Colors')}>
                <Text style={styles.clickable}>Aller aux couleurs</Text>
            </TouchableOpacity>
            {/* Si l'on veut passer des paramètres lors d'un navigation.navigate, 
            il suffit de passer en second argument un objet contenant les paramètres voulu */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Login', { username: username })}
                style={styles.clickable}
            >
                <AntDesign name="user" style={{ fontSize: 32 }} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// Deux autres fonctions utiles de disponibles dans l'objet navigation:
// navigation.goBack() : permet de revenir d'un cran en arrière
// navigation.push('NomRoute') : permet d'aller à la route
// navigation.popToTop() : permet de revenir au tout premier écran de la stack

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
