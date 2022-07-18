import React, { useState } from "react";
import { Text } from "react-native";
import estilo from '../estilo'

import ContadorDisplay from "./ContadorDisplay";
import ContadorBotoes from "./ContadorBotoes";

export default function (props) {

    var [numero, setNumero] = useState(0);

    var incremento = function ()
    {
        setNumero(numero++);
    }

    var decremento = function ()
    {
        setNumero(numero--);
    }

    return (
        <>
            <Text style={estilo.txtG}>
                Contador
                <ContadorDisplay valor={numero} /> {/* Comunicação direta */}
                <ContadorBotoes incremento={incremento} decremento={decremento}/> {/* Comunicação indireta */}
            </Text>
        </>
    )
}