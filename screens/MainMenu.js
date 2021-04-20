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
   Image,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {germ} from '../assets/icons';

 
 const MainMenu = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const styles = StyleSheet.create({
     germ1: {
       width: 150,
       height: 150,
       marginLeft: 150,
     },
     germ2:{
       width: 100,
       height: 100,
     },
     germ3:{
       width: 60,
       height: 60,
       marginLeft: 30,
     },
     title: {
       fontSize: 50,
       color: 'green',
       fontWeight: '900',
       margin: 20,
     },
     mainView: {
       padding: 40
     },
     container: {
       flex: 1,
       backgroundColor: 'black',
     },
   })
 
   return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.mainView}>
            <Image
                style={styles.germ2}
                source={germ}
            />
            <Text style={styles.title}>
                Epidemic Calculator 
            </Text>
            <Image
                style={styles.germ1}
                source={germ}
            />
            <Image
                style={styles.germ3}
                source={germ}
            />
            <Button
                color='green'
                title="New Game"
                onPress={()=>{
                    navigation.navigate('NewGame')
                }}
            />
            </View>
        </SafeAreaView>
   );
 };
 
 export default MainMenu;
 