import React from "react";
import { View, Text, ProgressViewIOSComponent } from "react-native";
import estilo from './estilo'

export default function (props) 
{
    return (
        <>
            <Text style={estilo.txtG}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </>
    )
}
