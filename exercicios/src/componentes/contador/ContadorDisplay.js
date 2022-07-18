import React from "react";
import { Text, View, StyleSheet } from "react-native";
import estilo from '../estilo'

export default function (props) {
    return (
        <View style={style.Display}>
            <Text style={[estilo.txtG, style.DisplayText]}>
                {props.valor}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20, 
        width: 300
    },
    DisplayText: {
        color: '#FFF'
    }
})