import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'reat-navigation-stack';

import AllMessagesScreen from './src/screen/AllMessagesScreen';

const navigator = createStackNavigator(
    {
        Messages: AllMessagesScreen
    },
    {
        initialRouteName: 'Messages',
        defaultNavigationOptions: {
            title: 'Testeur de présence'
        }
    }
);

export default createAppContainer(navigator);
