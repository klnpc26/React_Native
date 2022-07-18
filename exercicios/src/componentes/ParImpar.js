import React from "react";
import { Text, View } from "react-native";
import estilo from './estilo'

export default ({num = 2}) => {
    
    return (
        <View>
            <Text style={estilo.txtG}>O resultado é: </Text>
                {
                num % 2 == 0 ? 
                <Text style={estilo.txtG}>PAR</Text> : 
                <Text style={estilo.txtG}>IMPAR</Text>
                }
        </View>
    )
}