import React from "react";
import {
    View, 
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

import SelectedOptionLevel from "./SelectedOptionLevel";

export default function (props) {

    const levelEasy = {value: 0.1, label: 'easy'};
    const levelNormal = {value: 0.2, label: 'normal'};
    const levelHard = {value: 0.3, label: 'hard'};

    const levels = [levelEasy, levelNormal, levelHard];

    const selectedOptionLevel = levels.map((level, i) => {
        return (
            <SelectedOptionLevel key={i} label={level.label} onSelection={() => props.onLevelSelected(level.value)}/>
        )
    });

    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType='slide' 
        transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    {selectedOptionLevel}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});