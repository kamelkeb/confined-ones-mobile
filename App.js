import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';
// NavigationContainer est le composant qui va gérer l'arbre de navigation (le scénario de navigation),
// cet objet contiendra l'état de la navigation.
// Il doit être u wrapper englobant toute la structure des navigateurs.
import { NavigationContainer } from '@react-navigation/native';
// createStackNavigator est une fonction qui retourne un objet ayant deux propriétés,
// chacune est un composant react servant à configurer le navigateur: Screen et Navigator.
// Navigator contiendra des composant Screen comme enfants pour définir ses routes.
import { createStackNavigator } from '@react-navigation/stack';

import AllMessagesScreen from './src/screen/AllMessagesScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import ColorScreen from './src/screen/ColorsScreen';

const { Navigator, Screen } = createStackNavigator();

const App = (props) => {
    return (
        <NavigationContainer>
            {/* La configuration des routes se spécifie à travers des props
            du composant Navigator */}
            {/* Pour styliser le header d'un screen, mettre dans les option:
        headerStyle: sera appliqué à la vue qui englobe le header (backgroundColor?)
        headerTintColor: pour spécifier la couleur de la flêche retour et du titre
        headerTitleStyle: pour personaliser le style du texte (fontFamily, fontWheight etc) */}
            <Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerStyle: { backgroundColor: 'pink' },
                    headerTintColor: '#fff'
                }}
            >
                {/* L'attribut title permet de spécifier le titre qui sera visible
            dans le header lorsqu'on est sur le screen en question, si on ne le met pas c'est
            le nom de la route qui est affiché! */}
                <Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        title: 'Bienvenue!',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => alert('Login')} style={styles.clickable}>
                                <AntDesign name="user" style={{ fontSize: 32 }} />
                            </TouchableOpacity>
                        )
                        // headerLeft permet la même chose que headerRight mais va remplacer
                        // la flèche de retour lorsqu'elle est apparente
                    }}
                />
                {/* rq: si le titre à passer est un string, l'attribut title suffit*/}
                <Screen name="AllMessages" component={AllMessagesScreen} options={{ title: 'Messages' }} />
                {/* Si on veut passer un un composant react quelconque comme titre, on utilisera headerTitle
                headerTitle prendra un comosant react comme valeur */}
                <Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerTitle: <AntDesign name="user" style={{ fontSize: 32 }} /> }}
                />
                <Screen name="Colors" component={ColorScreen} options={{ title: 'Encore des couleurs!' }} />
            </Navigator>
        </NavigationContainer>
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

export default App;
