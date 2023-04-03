import { Button, Text } from "react-native"
const About = ({navigation}) => {
    return(
        <Button onPress={() => navigation.navigate("GarudEye")} title="This is supposed to be About"/>
    )
}

export default About