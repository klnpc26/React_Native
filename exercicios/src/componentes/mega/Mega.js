import { Text, TextInput } from "react-native";
import estilo from '../estilo'
import React, { Component } from "react";

export default class Mega extends Component {

    state = {
        qtdNumbers: this.props.qtdNumbers
    }
    
    alterarQtdNumero = (qtd) => {
        this.setState({ qtdNumbers: qtd});
    }

    render() {
        return (
            <>
                <Text style={estilo.txtG}>
                    Gerador de Mega-Sena {this.state.qtdNumbers}
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtd. de Números"
                    value={this.state.qtdNumbers}
                    onChangeText={qtdTexto => this.alterarQtdNumero(qtdTexto)}
                />
            </>
        )
    }
}