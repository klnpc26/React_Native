import React from "react";
import {Text, SafeAreaView, StyleSheet} from 'react-native'

import TextoCentral from "./components/TextoCentral";
import TelaA from "./screens/TelaA";
import TelaB from "./screens/TelaB";
import TelaC from "./screens/TelaC";

export default function (props) {
    return (
        <SafeAreaView style={styles.container}>
            <TelaA />
            <TelaB />
            <TelaC />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {        
        flex: 1,
    }
});