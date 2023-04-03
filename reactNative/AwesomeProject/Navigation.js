import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createAppContainer} from "@react-navigation/native"
import Home from "./components/screens/Home";
import About from "./components/screens/About";

const navigations = {
    Home:{
        screen: Home
    },
    About:{
        screen: About
    }
}
