import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native'

// import Stack from "./Stack";
import Tab from "./Tab";
// import Drawer from "./Drawer";

export default function (props) {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {/* <Drawer /> */}
                {/* <Stack /> */} 
                <Tab />
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});