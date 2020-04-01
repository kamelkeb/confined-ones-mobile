import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';

const AllMessagesScreen = (props) => {
    const [ listeVisible, setListeVisible ] = useState(false);
    const [ homeVisible, setHomeVisible ] = useState(false);
    const [ loginVisible, setLoginVisible ] = useState(false);

    const hideAll = () => {
        setListeVisible(false);
        setLoginVisible(false);
        setHomeVisible(false);
    };
    const data = [
        {
            id: 1,
            name: 'Martin',
            age: 42
        },
        {
            id: 2,
            name: 'Elisa',
            age: 22
        },
        {
            id: 3,
            name: 'Paul',
            age: 88
        },
        {
            id: 4,
            name: 'Lee',
            age: 33
        },
        {
            id: 5,
            name: 'Mehdi',
            age: 19
        },
        {
            id: 6,
            name: 'Marc',
            age: 42
        },
        {
            id: 7,
            name: 'Martin',
            age: 46
        }
    ];
    return (
        <SafeAreaView style={{ ...styles.container, marginTop: 60 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => {
                        hideAll();
                        setHomeVisible(true);
                    }}
                    style={styles.clickable}
                >
                    <Text>
                        <AntDesign name="home" style={{ fontSize: 32 }} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        hideAll();
                        setListeVisible(true);
                    }}
                    style={styles.clickable}
                >
                    <Text>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        hideAll();
                        setLoginVisible(true);
                    }}
                    style={styles.clickable}
                >
                    <Text>Icone Login</Text>
                </TouchableOpacity>
            </View>

            {/* <Button title="Afficher ou cacher la liste des messages" onPress={() => setListeVisible(!listeVisible)} /> */}
            {listeVisible ? (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => alert('Joli click!')}>
                            <View style={{ ...styles.clickable, ...styles.container }}>
                                <Text>{`Bonjour je m'appelle ${item.name} et j'ai ${item.age} ans.`}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : null}
            {loginVisible ? <LoginScreen /> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 32
    },
    clickable: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
        padding: 5
    }
});

export default AllMessagesScreen;
