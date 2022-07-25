import React from "react";
import { Button, StyleSheet, View } from "react-native";
import TextoCentral from '../components/TextoCentral'

export default function (props) {

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Button 
                    title="Abrir"
                    onPress={() => {
                        props.navigation.openDrawer()
                    setTimeout(() => {
                        props.navigation.closeDrawer()
                        setInterval(() => {
                            props.navigation.toggleDrawer()
                        }, 1000)
                    }, 3000)
                }}
                />
                
            </View>
            <View style={styles.container}>
                <TextoCentral corFundo='#33fa72' corTexto="#000">
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});