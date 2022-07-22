import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
      </View>
    )
  }
}