import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Place from './components/placeData';
// import Navigation from './Navigation';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"
import Home from './components/screens/Home';
import About from './components/screens/About';
import WildBoar from './components/screens/wildboar';
import Tiger from './components/screens/Tiger';
import Deer from './components/screens/deer';
import Elephant from './components/screens/elephant';

export default function App() {  
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "GarudEye" component = {Home}/>
        <Stack.Screen name = "About" component = {About}/>
        <Stack.Screen name = "Tiger" component = {Tiger}/>
        <Stack.Screen name = "Elephant" component = {Elephant}/>
        <Stack.Screen name = "Deer" component = {Deer}/>
        <Stack.Screen name = "WildBoar" component = {WildBoar}/>
      </Stack.Navigator>
    </NavigationContainer>









    // <View style={styles.container}>
    //   <Text>Open up App.js</Text>
    //   <StatusBar style="auto" />
    //   <TextInput
    //     style={styles.textInput}
    //     placeholder='Search'
    //     multiline
    //     onChangeText={(currentText) => setPlace(currentText)}
    //   />
    //   <Button
    //     title={place || "Enter the Location"}
    //     onPress={() => <Place name="Earth"/>}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    borderWidth: 1,
    borderColor: "#000",
    margin:8,
    width:200
  }
});
