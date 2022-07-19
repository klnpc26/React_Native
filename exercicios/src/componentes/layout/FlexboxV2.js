import React from "react";
import { StyleSheet, View, Text } from "react-native";

/*Flexbox Item*/
import Quadrado from './Quadrado'

export default props => {
    return (
        /*Flexbox Container*/
        <View style={style.FlexV2}> 
            <Quadrado color="#ff801a"/> 
            <Quadrado color="#900"/> 
            <Quadrado color="#0F0"/> 
            <Quadrado color="#009"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1, /*Main Axis*/
        width: '100%',
        alignItems: 'center', /*Cross Axis*/
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})