import React from "react";
import { Text, View, StyleSheet } from 'react-native'

export default function (props) {
    return (
        <View style={[styles.container, {backgroundColor: props.corFundo || '#000'}]}>
            <Text style={[styles.title, {color: props.corTexto || '#FFF'}]}>
                {props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {   
        flex: 1,     
        alignItems: 'center', /*Cross Axis*/
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 50,
    }
});