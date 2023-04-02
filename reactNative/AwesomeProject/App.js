import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Place from './components/placeData';

export default function App() {

  const [place, setPlace] = useState("")

  return (
    <View style={styles.container}>
      <Text>Open up App.js</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        placeholder='Search'
        multiline
        onChangeText={(currentText) => setPlace(currentText)}
      />
      <Button
        title={place || "Enter the Location"}
        onPress={() => <Place name="Earth"/>}
      />
    </View>
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
