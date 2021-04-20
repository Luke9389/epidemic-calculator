/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    Button,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

const numPlayersData = [
    {
        id: '2',
        title: '2',
    },
    {
        id: '3',
        title: '3',
    },
    {
        id: '4',
        title: '4',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const NewGame = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [numPlayers, setNumPlayers] = useState(null);

    const renderItem = ({item}) => {
        const backgroundColor = item.id === numPlayers ? 'red' : 'blue';
        const color = 'white';

        return (
            <Item
                item={item}
                onPress={() => setNumPlayers(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.mainView}>
                <Text style={styles.title}>New Game</Text>
                <Text style={styles.question}>How many players?</Text>
                <FlatList
                    data={numPlayersData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={numPlayers}
                    horizontal={true}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        color: 'green',
        fontWeight: '900',
        marginBottom: 20,
    },
    question: {
        fontSize: 30,
        color: 'green',
    },
    mainView: {
        padding: 40
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
    },
});

export default NewGame;