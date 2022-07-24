import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

export default function (props) {

    const {label} = props;

    const styleOption = [styles.button];

    if(label == 'easy') styleOption.push(styles.bgEasy)
    if(label == 'normal') styleOption.push(styles.bgNormal)
    if(label == 'hard') styleOption.push(styles.bgHard)

    return (
        <TouchableOpacity style={styleOption} onPress={props.onSelection}>
            {label == 'easy' ? <Text style={styles.buttonLabel}>Fácil</Text> : false}
            {label == 'normal' ? <Text style={styles.buttonLabel}>Normal</Text> : false}
            {label == 'hard' ? <Text style={styles.buttonLabel}>Intermediário</Text> : false}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
});