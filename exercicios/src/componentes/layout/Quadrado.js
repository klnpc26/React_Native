import React from "react";
import { StyleSheet, View } from "react-native";
import estilo from '../estilo'

export default props => {
    const lado = 50;
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.color || '#000'
        }}>
        </View>
    )
}