import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Place from './components/placeData';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js</Text>
      <StatusBar style="auto" />
      <Place name="Earth"/>
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
});
