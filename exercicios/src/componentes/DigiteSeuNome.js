import { View, TextInput } from 'react-native'
import React, {useState} from 'react'

 export default function (props) {
    var [nome, setNome] = useState('Teste')
    return (
        <View>
            <TextInput 
            placeholder='Digite Seu Nome'
            value={nome}
            onChangeText={nome => setNome(nome)} /*Pegamos o valor digitado pelo usuário e com ele será modificado o estado*/
            />
        </View>
    )
 }