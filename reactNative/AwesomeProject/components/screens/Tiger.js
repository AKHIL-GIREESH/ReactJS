import { Button, Text } from "react-native"
const Tiger = ({navigation}) => {
    return(
        <Button onPress={() => navigation.navigate("GarudEye")} title="This is supposed to be Tiger"/>
    )
}

export default Tiger