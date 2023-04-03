import { Text, Button } from "react-native"
const Home = ({navigation}) => {
    return(
        <Button onPress={() => navigation.navigate("About")} title="This is supposed to be Home"/>
    )
}

export default Home