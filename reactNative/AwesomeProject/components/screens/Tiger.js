import { Button, Text,StyleSheet, ScrollView, Image } from "react-native"
import tigerIMG from "../../tigerimg.jpeg"

const Tiger = ({navigation}) => {
    return(
        <ScrollView ontentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={ tigerIMG }
      />
      <Text style={styles.Header}>Tips to Stay Safe</Text>
      <Text style={styles.text}>
      1.Do Not Run: If you encounter a tiger on your way, do not run. Tigers are predators, and running may trigger their instinct to chase and attack. Instead, stay calm and try to back away slowly, while maintaining eye contact with the tiger.</Text>

<Text style={styles.text}>2.Make Yourself Look Bigger: If the tiger approaches you, try to make yourself look as big and intimidating as possible. Raise your arms above your head, open your jacket or shirt, and wave your arms to make yourself appear larger.</Text>

<Text style={styles.text}>3.Use a Loud Voice: Speak loudly and firmly to the tiger, using a commanding voice. This may help to intimidate the animal and make it think twice about attacking.</Text>

<Text style={styles.text}>4.Back Away Slowly: If the tiger is blocking your path, try to back away slowly while keeping your eyes on the animal. Do not turn your back on the tiger, as this may be interpreted as an invitation to attack.</Text>

<Text style={styles.text}>5.Be Aware of Your Surroundings: If you see a tiger on the road, there may be more nearby. Be alert and watch for other tigers that may be crossing the road. Additionally, be aware of any obstacles or hazards on the road that may require you to slow down or stop suddenly.</Text>

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
  

export default Tiger