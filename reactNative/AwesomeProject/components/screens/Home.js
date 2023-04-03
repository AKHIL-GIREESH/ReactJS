import { Text, Button } from "react-native"
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';


import { Card } from 'react-native-paper';
const { width } = Dimensions.get('window');
const cardWidth = width * 0.4;
 const cards = [
    {
      title: 'Elephant',
      text: 'Elephants...',
      //image: require('../assets/nam-anh-QJbyG6O0ick-unsplash.jpg'),
    },
    {
      title: 'Tiger',
      text: '',
      //image: require('../assets/tapan-kumar-choudhury-Cj8LU2T4Rs8-unsplash.jpg'),
    },
    {
      title: 'Wild Boar',
      text: '',
      //image: require('../assets/ed-van-duijn-414NZVxzc20-unsplash.jpg'),

    },
    {
      title: 'Deer',
      text: '',
      //image: require('../assets/divide-by-zero-FGkNt8tO04I-unsplash.jpg'),

    },
  ];

export default function GarudEye() {
  return (
   <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>GarudEye</Text>
      </View> */}
      <View style={styles.rectangle}>
        <MapView
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 20,
            flex: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: 'Transparent',
          }}
          initialRegion={{
            latitude: 10.22319056,
            longitude: 76.4090583 ,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{ latitude: 10.22319056, longitude: 76.4090583 }}
            title="You are Here"
            // description="Marker Description"
          />
        </MapView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Recent Sightings</Text>
        <ScrollView horizontal={true}>
          <View style={styles.cardRow}>
            {cards.map((card, index) => {
              return (
                <TouchableOpacity>
                  <View key={index} style={styles.card}>
                    <Image source={card.image} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardText}>{card.text}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}



// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
    backgroundColor: '',
    
  },

  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf:'center',
    marginBottom:25,
  },
  rectangle: {
    overflow: 'hidden',
    width: 350,
    height: 200,
    borderRadius: 40,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 35,
  },
  section: {
    flex: 1,
    marginBottom: 20,
  },
  sectionHeading: {
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    elevation: 2,
    width: cardWidth,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
  },
});