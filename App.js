import React, { useState } from 'react';
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

const { Navigator, Screen } = createStackNavigator();

const App = (props) => {
    return (
        <NavigationContainer>
            {/* La configuration des routes se spécifie à travers des props
            du composant Navigator */}
            <Navigator initialRouteName="Welcome">
                <Screen name="Welcome" component={WelcomeScreen} />
                <Screen name="AllMessages" component={AllMessagesScreen} options={{ title: 'Messages' }} />
                <Screen name="Login" component={LoginScreen} />
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
