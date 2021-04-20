/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Button,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
 
const NewGame = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

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
    })
 
    const numPlayersData = [
        {
            id: 1,
            title: '1',
        }
    ];

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? 'red' : 'blue';
        const color = 'white';

        return (
            <Item>
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            </Item>
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
                />
            </View>
        </SafeAreaView>
    );
};

export default NewGame;
