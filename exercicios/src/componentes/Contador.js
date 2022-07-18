import React, {useState} from "react";
import {Text, Button} from 'react-native'
import estilo from './estilo'

export default function (props) 
{
    //number = Será utilizado como leitura
    //setNumber = Será utilizado para alterar o valor
    var [number, setNumber] = useState(props.valor)

    // Função que incrementa o valor
    var incremento = function ()
    {
        setNumber(number++); // atuazaliza a parte gráfica
    }

    // Função que decrementa o valor
    var decremento = function ()
    {
        setNumber(number--); // atuazaliza a parte gráfica
    }

    return (
        <>
            <Text style={estilo.txtG}>{number}</Text>
            <Button title="+" onPress={incremento}/>
            <Button title="-" onPress={decremento}/>
        </>
    )
}