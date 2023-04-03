import { Button, Text ,StyleSheet, View, Image} from "react-native"
import deerIMG from "../../deerIMG.jpeg"
const Deer = () => {
    return(
        <View style={styles.container}>
      <Image
        style={styles.image}
        source={ deerIMG }
      />
      <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 20,
    },
  });
  

export default Deer