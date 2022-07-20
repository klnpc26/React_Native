import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default props => {
    return (
        <View style={style.FlexV4}> 
            <View style={style.v0} />
           <View style={style.v1} /> 
           <View style={style.v2} /> 
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        width: 100,
        flexGrow: 1,
        backgroundColor: '#000'
    },
    v0:
    {
        backgroundColor: '#36c9a7',
        height: 350,
    },
    v1:
    {
        backgroundColor: '#ff801a',
        flexGrow: 1
    },
    v2:
    {
        backgroundColor: '#dd22c1',
        flexGrow: 1
    }
})