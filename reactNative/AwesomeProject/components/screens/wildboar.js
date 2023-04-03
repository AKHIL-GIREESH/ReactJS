import { Button, Text } from "react-native"
const WildBoar = ({navigation}) => {
    return(
        <Button onPress={() => navigation.navigate("GarudEye")} title="This is supposed to be WildBoar"/>
    )
}

export default WildBoar