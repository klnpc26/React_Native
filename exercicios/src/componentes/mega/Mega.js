import React, { Component } from "react"
import { View, Text, TextInput, Button } from 'react-native'
import estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdNumbers: this.props.qtdNumbers,
        numeros: []
    }
    
    alterarQtdNumero = (qtd) => {
        this.setState({ qtdNumbers: +qtd});
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    gerarNumeros = () => {

        var numeros = [];

        for(var i = 0; i < this.state.qtdNumbers; i++)
        {
            var number = Math.floor(Math.random() * 60) + 1;

            if(numeros.includes(number))
            {
                i--;
            }
            else 
            {
                numeros[i] = number;
            }
        }

        this.setState({numeros})
    }

    render() {
        return (
            <>
                <Text style={estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtd. de Números"
                    value={this.state.qtdNumbers}
                    onChangeText={this.alterarQtdNumero}
                />

                <Button 
                title="Gerar"
                onPress={this.gerarNumeros}
                />

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>

            </>
        )
    }
}