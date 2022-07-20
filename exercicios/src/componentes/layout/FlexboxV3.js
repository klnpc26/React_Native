import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}> 
            <Quadrado color="#ff801a" lado={20}/> 
            <Quadrado color="#900" lado={30}/> 
            <Quadrado color="#0F0" lado={40}/> 
            <Quadrado color="#009" lado={50}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        heigth: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})