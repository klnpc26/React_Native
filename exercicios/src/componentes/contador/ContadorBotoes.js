import React from "react";
import { View, Button, StyleSheet } from "react-native";
import estilo from '../estilo'

export default function (props) {
    return (
        <View style={style.Botoes}>
            <Button title='+' onPress={props.incremento}/>
            <Button title='-'onPress={props.decremento}/>
        </View>
    )
}

const style = StyleSheet.create({
   Botoes: {
        flexDirection: "row"
   }
});