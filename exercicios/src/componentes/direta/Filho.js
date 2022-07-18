import React from "react";
import { Text } from 'react-native'
import estilo from "../estilo";

export default function (props) {

    return (
        <>
            <Text style={estilo.txtG}>{props.a}</Text>
            <Text style={estilo.txtG}>{props.b}</Text>
        </>
    )
}