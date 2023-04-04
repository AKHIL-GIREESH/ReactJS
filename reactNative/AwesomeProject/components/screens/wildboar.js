import { Button, Text,StyleSheet, ScrollView, Image } from "react-native"
import wildBoarIMG from "../../wildboarimg.jpeg"
const WildBoar = () => {
    return(
        <ScrollView ontentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={ wildBoarIMG }
      />
      <Text style={styles.Header}>Tips to Stay Safe</Text>
      <Text style={styles.text}>
      1.Stay Alert: When in areas where wild boars are known to be present, it's important to stay aware of your surroundings. Look for signs of their presence, such as tracks or rooting, and listen for sounds such as grunting or snorting.</Text>

<Text style={styles.text}>2.Keep Your Distance: Wild boars can be aggressive if they feel threatened or cornered, so it's important to maintain a safe distance from them. Keep at least 50 meters away, and avoid approaching them or getting between a mother and her piglets.</Text>

<Text style={styles.text}>3.Don't Feed Them: Feeding wild boars can habituate them to human presence and give them an incentive to approach people in search of food. Never feed wild boars intentionally or leave food scraps or garbage around your campsite or picnic area.</Text>

<Text style={styles.text}>4.Avoid Surprising Them: Wild boars have poor eyesight, but they have an excellent sense of smell and hearing. If you're hiking or moving through an area where wild boars are present, make noise to alert them to your presence and avoid surprising them.</Text>

<Text style={styles.text}>5.Be Prepared: If you're planning to spend time in an area where wild boars are present, make sure you're prepared with appropriate gear and supplies. Carry a whistle or other noise-making device to scare off any animals that approach you, and consider wearing protective clothing such as thick boots and pants. Additionally, it's a good idea to familiarize yourself with the behavior of wild boars and how to respond if you encounter one.</Text>

    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
     marginHorizontal:10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#202020',
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
  


export default WildBoar