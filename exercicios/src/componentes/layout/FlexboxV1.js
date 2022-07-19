import React from "react";
import { StyleSheet, View } from "react-native";

import Quadrado from './Quadrado'

export default props => {
    const lado = 50;
    return (
        <View style={style.FlexV1}>
            <Quadrado color="#ff801a"/>
            <Quadrado color="#900"/>
            <Quadrado color="#0F0"/>
            <Quadrado color="#009"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
})