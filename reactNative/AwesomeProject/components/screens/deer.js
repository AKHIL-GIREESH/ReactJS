import { Button, Text } from "react-native"
const Deer = ({navigation}) => {
    return(
        <Button onPress={() => navigation.navigate("GarudEye")} title="This is supposed to be Deer"/>
    )
}

export default Deer