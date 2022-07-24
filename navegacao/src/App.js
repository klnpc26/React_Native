import React from "react";
import {Text, SafeAreaView, StyleSheet} from 'react-native'

import TextoCentral from "./components/TextoCentral";

export default function (props) {
    return (
        <SafeAreaView style={styles.container}>
            <TextoCentral>App</TextoCentral>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {        
        flex: 1,
    }
});