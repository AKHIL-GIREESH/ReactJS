import { Button, Text,StyleSheet, ScrollView, Image } from "react-native"
import elephantIMG from "../../elephantimg.jpeg"

const Elephant = ({navigation}) => {
    return(
        <ScrollView ontentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={ elephantIMG }
      />
      <Text style={styles.Header}>Tips to Stay Safe</Text>
      <Text style={styles.text}>
      1.Slow Down: If you see elephants on the road, slow down and be prepared to stop. Elephants are large and can be unpredictable, so it's important to approach them cautiously.</Text>

<Text style={styles.text}>2.Keep Your Distance: Elephants are wild animals and can become aggressive if they feel threatened or provoked. It's important to keep a safe distance from the animals and avoid getting too close.</Text>

<Text style={styles.text}>3.Turn Off Your Engine: If you encounter elephants on the road, turn off your engine and avoid making sudden movements or loud noises. This may help to prevent the elephants from becoming agitated or aggressive.</Text>

<Text style={styles.text}>4.Do Not Approach: If you encounter elephants on the road, do not approach them. Elephants can be dangerous and may charge if they feel threatened. It's best to admire them from a safe distance and avoid any direct contact with the animals.</Text>

<Text style={styles.text}>5.Observe from a Safe Distance: If you encounter elephants on the road, observe them from a safe distance and avoid interfering with their natural behavior. Elephants are intelligent and social animals, and it's important to respect their space and behavior.</Text>

    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
     marginHorizontal:10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: 350,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    text: {
        marginHorizontal:12,
      fontSize: 20,
    //   fontWeight: 'bold',
      marginVertical: 20,
    },
    Header:{
        marginHorizontal:100,
        marginVertical:20,
        fontWeight:'bold',
        fontSize:25,
    }
  });
  

export default Elephant