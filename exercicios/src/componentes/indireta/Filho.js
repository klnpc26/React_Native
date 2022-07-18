import React from "react";
import { Text, Button } from "react-native";

export default function (props) {

    function gerarNumero(min, max) {
        var fator = max - min + 1;
        return parseInt(Math.random() * fator) + min;
    }

    return (
        <Button title='Executar' onPress={function() {
           props.funcao(gerarNumero(props.min, props.max))
        }}/>
    )
}