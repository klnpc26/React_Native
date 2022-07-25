import React from "react";
import { Text, View, StyleSheet, Button } from 'react-native'

export default function (props) {
    return (
        <View style={styles.container}>
            <View style={styles.trocaEixo}>
                {props.voltar ? <Button title="Voltar" onPress={() => { props.navigation.goBack() }} /> : false}

                {props.avancar ? <Button title="Avançar"
                    onPress={() => {
                        props.navigation.push(props.avancar, props.avancarParams)
                    }} /> : false}
            </View>
            <View style={styles.container}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    trocaEixo: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});