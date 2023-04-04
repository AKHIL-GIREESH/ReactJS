import { Button, Text ,StyleSheet, ScrollView, Image} from "react-native"
import deerIMG from "../../deerIMG.jpeg"
const Deer = () => {
    return(
        <ScrollView ontentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={ deerIMG }
      />
      <Text style={styles.Header}>Tips to Stay Safe</Text>
      <Text style={styles.text}>
      1.Slow Down: If you see deer on the road, slow down and be prepared to stop. Deer are unpredictable and may dart in front of your vehicle, so it's important to be extra cautious.</Text>

<Text style={styles.text}>2.Use Your Headlights: Use your headlights to increase your visibility and help you see any deer on the road ahead. Use high beams when driving on unlit roads, but switch to low beams when approaching other vehicles or when a deer is in view.</Text>

<Text style={styles.text}>3.Honk Your Horn: If you see deer on the road ahead, honk your horn to alert them to your presence. This may help to startle them and encourage them to move away from the road.</Text>

<Text style={styles.text}>4.Avoid Swerving: If you encounter a deer on the road, do not swerve to avoid it. Swerving can cause you to lose control of your vehicle and may result in a more serious accident. Instead, brake firmly and try to stay in your lane.</Text>

<Text style={styles.text}>5.Be Aware of Your Surroundings: If you see one deer on the road, there may be more nearby. Be alert and watch for other deer that may be crossing the road. Additionally, be aware of any obstacles or hazards on the road that may require you to slow down or stop suddenly.</Text>

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
  

export default Deer