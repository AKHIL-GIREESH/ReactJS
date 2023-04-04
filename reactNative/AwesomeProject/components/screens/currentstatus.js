import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [headerText, setHeaderText] = useState('');
  const [headerColor, setHeaderColor] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  useEffect(() => {
    fetch('http://192.168.203.23:3000/wildAnimalsData')
      .then(response => response.json())
      .then(data => {
        setHeaderText(data.text);
        setHeaderColor(data.color);
        setButtonColor(data.color);
      })
      .catch(error => console.error(error));
  }, []);

  const onPressButton = () => {
    fetch('https://api.example.com/button')
      .then(response => response.json())
      .then(data => setButtonColor(data.color))
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: headerColor }]}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={onPressButton}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;