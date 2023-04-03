import { Button, Text,StyleSheet, View, Image } from "react-native"
import wildBoarIMG from "../../wildboarimg.jpeg"
const WildBoar = () => {
    return(
        <View style={styles.container}>
      <Image
        style={styles.image}
        source={ wildBoarIMG }
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

export default WildBoar