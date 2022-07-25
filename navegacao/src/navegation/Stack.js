import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from "../screens/TelaA";
import TelaB from "../screens/TelaB";
import TelaC from "../screens/TelaC";
import PassoStack from "./PassoStack";

const Stack = createNativeStackNavigator();

export default function (props) {

    /*
        initialRouteName = Define a tela inicial
        options = Podemos definir, por exemplo, o titulo da tela
        screenOptions = Podenmos suprimir ela, ou seja, mostrar o cabeçalho ou não
    */

    return (
        <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
            <Stack.Screen name="TelaA" options={{title: 'Informações Iniciais'}}>
                {props => (
                    <PassoStack  {...props} avancar="TelaB">
                        <TelaA />
                    </PassoStack>
                )}
            </Stack.Screen>

            <Stack.Screen name="TelaB">
                {props => (
                    <PassoStack  {...props} avancarParams={{numero: parseInt(Math.random() * 100)}}  voltar avancar="TelaC">
                        <TelaB />
                    </PassoStack>
                )}
            </Stack.Screen>

            <Stack.Screen name="TelaC">
                {props => (
                    <PassoStack  {...props} avancar="TelaC" voltar>
                        <TelaC {...props} />
                    </PassoStack>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}