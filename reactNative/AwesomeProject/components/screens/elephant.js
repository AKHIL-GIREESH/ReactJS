import { Button, Text } from "react-native"
const Elephant = ({navigation}) => {
    return(
        <Button onPress={() => navigation.navigate("GarudEye")} title="This is supposed to be Elephant"/>
    )
}

export default Elephant