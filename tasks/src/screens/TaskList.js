import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Alert } from 'react-native'
import AsyncStorege from '@react-native-community/async-storage'
import moment from 'moment'
import 'moment/locale/pt-br'
import Tasks from '../components/Tasks'
import Icon from 'react-native-vector-icons/FontAwesome'
import Axios from 'axios'

import commonStyles from '../commonStyles'
import AddTask from '../screens/AddTask';
import todayImage from '../../assets/imgs/today.jpg'
import { server, showError } from '../common'

const initialState = {
    tasks: [],
    showDoneTasks: true,
    visibleTasks: [],
    showAddTask: false,
}

export default class TaskList extends Component {

    state = {
        ...initialState
    }

    //Restura visualmente a lista filtrada quando o componente é exibido
    componentDidMount = async () => {
        const stateString = await AsyncStorege.getItem('tasksState');
        const savedState = JSON.parse(stateString) || initialState;
        this.setState({
            showDoneTasks: savedState.showDoneTasks
        }, this.filterTasks)

        this.loadTasks();
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks);
    }

    filterTasks = () => {
        var visibleTasks = null

        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        }
        else {
            const pending = task => task.doneAt == null
            visibleTasks = this.state.tasks.filter(pending);
        }

        this.setState({ visibleTasks });

        AsyncStorege.setItem('tasksState', JSON.stringify({
            showDoneTasks: this.state.showDoneTasks
        }))
    }

    toggleTask = async taskId => {
        try {
            await Axios.put(`${server}/tasks/${taskId}/toggle`)
            this.loadTasks();
        }
        catch(err) {
            showError(err)
        }
    }

    addTask = async newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados inválidos', 'Descrição não informada!')
            return
        }
        
        try {
            await Axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                estimateAt: newTask.date
            })

            this.setState({ showAddTask: false }, this.loadTasks)
        }
        catch(err) {
            showError(err)
        }
    }

    deleteTask = async taskId => {
        try {
            await Axios.delete(`${server}/tasks/${taskId}`)
            this.loadTasks();

            this.setState({ showAddTask: false }, this.loadTasks)
        }
        catch(err) {
            showError(err)
        }
    }

    loadTasks = async () => {
        try {
            const maxDate = moment().endOf('day').format('YYYY-MM-DD 23:59:59');
            const res = await Axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({tasks: res.data}, this.filterTasks)
        }
        catch(err) {
            showError(err)
        }
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.addTask} />
                <ImageBackground style={styles.background} source={todayImage}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? "eye" : "eye-slash"}
                                size={20} color={commonStyles.color.secundary}>
                            </Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Tasks {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />} />
                </View>
                <TouchableOpacity style={styles.addButton}
                    activeOpacity={0.7}
                    onPress={() => this.setState({ showAddTask: true })}>
                    <Icon name="plus" size={20} color={commonStyles.color.secundary} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.color.secundary,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.color.secundary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 20,
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS == 'ios' ? 40 : 10
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.color.today,
        justifyContent: 'center',
        alignItems: 'center'
    }
});