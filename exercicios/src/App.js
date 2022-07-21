import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

// import CompPadrao, { Comp1, Comp2 } from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'
// import Aleatorio from './componentes/Aleatorio'
// import Titulo from './componentes/Titulo'
// import Botao from './componentes/Botao'
// import Contador from './componentes/Contador'
// import Pai from './componentes/direta/Pai'
// import Pai from './componentes/indireta/Pai'
// import ContadorV2 from './componentes/contador/ContadorV2'
// import Diferenciar from './componentes/Diferenciar'
// import ParImpar from './componentes/ParImpar'
// import Familia from './componentes/relacao/Familia'
// import Membro from './componentes/relacao/Membro'
// import UsuarioLogado from './componentes/UsuarioLogado'
// import ListaProdutos from './componentes/produtos/ListaProdutos'
// import ListaProdutosV2 from './componentes/produtos/ListaProdutosV2'
// import DigiteSeuNome from './componentes/DigiteSeuNome'
// import FlexboxV1 from './componentes/layout/FlexboxV1'
// import FlexboxV2 from './componentes/layout/FlexboxV2'
// import FlexboxV3 from './componentes/layout/FlexboxV3'
// import FlexboxV4 from './componentes/layout/FlexboxV4'
import Mega from './componentes/mega/Mega' 

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdNumbers={12}/>
        {/* 
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome: 'Kaique', email: 'kaique.lima@gmail.com'}}/>
        <Familia>
            <Membro nome="Kaique" sobrenome="Nepomuceno" />
        </Familia>
        <Familia>
            <Membro nome="Carlos" sobrenome="Silva" />
        </Familia>
        <ParImpar num={5}/>
        <Diferenciar />
        <ContadorV2 />
        <Contador valor={5}/>
        <Titulo principal="Cadastro"/>
        <Titulo segundario="Tela de cadastro produto"/>
        <Aleatorio min={1} max={5}/> 
        <Comp1 />
        <Comp2 />
        <Primeiro /> 
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App:{
        borderColor: "#000",
        flexGrow: 1, // Crescer. Ocupa a tela inteira (Eixo Principal)
        justifyContent: "center", // O eixo principal iremos centralizar o conteúdo
        alignItems: "center",//(Eixo Linha)
        padding: 20,
        textAlign: "center"
    }
});