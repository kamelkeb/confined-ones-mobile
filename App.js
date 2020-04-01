import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
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
        <View style={styles.container}>
            <Text style={styles.textStyle}>Salut Ifocop!</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text>{`Bonjour je m'appelle ${item.name} et j'ai ${item.age} ans.`}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 32
    }
});
