import React from "react";
import estilo from "../estilo";
import { Text, FlatList } from "react-native";

import produtos from './produtos'

export default props => {

    var  produtoRender = function ({item}) {
            return <Text>{item.id}) {item.nome} tem o preço de R$ {item.preco}</Text>
    }

    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos V2
            </Text>
            <FlatList 
            data={produtos} /*Objeto*/
            keyExtractor={x => x.id}
            renderItem={produtoRender}
            />
        </>
    )
}