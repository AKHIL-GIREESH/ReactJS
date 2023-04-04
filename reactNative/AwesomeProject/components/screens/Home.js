import { Text, Button } from "react-native"
import { View, StyleSheet } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import elephantIMG from "../../elephantimg.jpeg"
import wildBoarIMG from "../../wildboarimg.jpeg"
import tigerIMG from "../../tigerimg.jpeg"
import deerIMG from "../../deerIMG.jpeg"

const { width } = Dimensions.get('window');
const cardWidth = width * 0.4;
const wildAnimalsData = () => {
    fetch('http://192.168.203.23:3000/wildAnimalsData')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data
    })
    .catch((err) => console.log(err))
}
 const cards = [
    {
      title: 'Elephant',
      text: '',
      image: elephantIMG,
    },
    {
      title: 'Tiger',
      text: '',
      image: tigerIMG,
    },
    {
      title: 'Wild Boar',
      text: '',
      image: wildBoarIMG,

    },
    {
      title: 'Deer',
      text: '',
      image:deerIMG,

    },
  ];

export default function GarudEye({navigation}) {
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
                <TouchableOpacity onPress = {() => navigation.navigate(`${card.title.replace(" ","")}`)}>
                  <View key={index} style={styles.card}>
                    <Image source={card.image} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardText}>{card.text}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text>
            {JSON.stringify(wildAnimalsData())}
          </Text>
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
    height: 300,
    borderRadius: 40,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 35,
    marginTop:35,
  },
  section: {
    flex: 1,
    marginBottom: 20,
    marginTop:20,
  },
  sectionHeading: {
    paddingHorizontal: 10,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 35,
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