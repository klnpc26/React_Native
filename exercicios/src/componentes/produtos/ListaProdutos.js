import React from "react";
import { Text } from "react-native";
import estilo from "../estilo";

import produtos from './produtos'

export default props => {

    function obterLista() {
        return produtos.map( x => {
            return (<Text key={x.id}>{x.id}) {x.nome} tem o preço de - R$ {x.preco}</Text>);
       });
    }

    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos
            </Text>
            {obterLista()}
        </>
    )
}