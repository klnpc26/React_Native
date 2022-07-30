import React, {Component} from 'react'
import { Text, View, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'
import Tasks from '../components/Tasks'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddTask from '../screens/AddTask';

export default class TaskList extends Component {

    state = {
        tasks: [
            {
                id: Math.random(),
                desc: 'Comprar Livro de React Native',
                estimateAt: new Date(),
                doneAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Ler Livro de React Native',
                estimateAt: new Date(),
                doneAt: null,
            }
        ],
        showDoneTasks: true,
        visibleTasks: [],
        showAddTask: true,
    }

    componentDidMount = () => {
        this.filterTasks()
    }

    toggleFilter = () => {
        this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
    }

    filterTasks = () => {
        var visibleTasks = null

        if(this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        }
        else {
            const pending = task => task.doneAt == null
            visibleTasks = this.state.tasks.filter(pending);
        }

        this.setState({ visibleTasks })
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        });

        this.setState({tasks}, this.filterTasks);
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} onCancel={() => this.setState({showAddTask: false})}/>
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
                    renderItem={({item}) => <Tasks {...item} toggleTask={this.toggleTask}/>}/>
                </View>
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
    }
});