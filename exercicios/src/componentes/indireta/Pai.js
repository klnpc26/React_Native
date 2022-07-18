import React, {useState} from "react";
import { Text } from "react-native";
import Filho from "./Filho";
import estilo from '../estilo'

export default function (props) {

    var [numero, setNumero] = useState(0);

    function exibirValor(numero) {
        setNumero(numero);
    }

    return (
        <>
        <Text style={estilo.txtG}>{numero}</Text>
            <Filho min={1} max={60} funcao={exibirValor} /> {/* Passa como referência a função para o componente filho */}
        </>
    )
}