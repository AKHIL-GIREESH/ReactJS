import { Button, Text } from "react-native"
const About = ({navigation}) => {
    return(
        <Button onPress={() => navigation.navigate("Home")} title="This is supposed to be About"/>
    )
}

export default About