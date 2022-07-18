import React from "react";
import { Text, Platform } from "react-native";

export default function (props) {
    
    if(Platform.OS == 'android') {
        return <Text>ANDROID</Text>
    } else if(Platform.OS == 'ios') {
        return <Text>iOS</Text>
    } else {
        return <Text>DEU RUIM!!!</Text>
    }
}