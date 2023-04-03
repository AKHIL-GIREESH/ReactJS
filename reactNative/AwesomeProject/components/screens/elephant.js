import { Button, Text,StyleSheet, View, Image } from "react-native"
import elephantIMG from "../../elephantimg.jpeg"

const Elephant = ({navigation}) => {
    return(
        <View style={styles.container}>
      <Image
        style={styles.image}
        source={ elephantIMG }
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

export default Elephant