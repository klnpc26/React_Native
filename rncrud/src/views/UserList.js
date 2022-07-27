import { getActionFromState } from '@react-navigation/native'
import { ListItem, Avatar, Icon  } from '@rneui/themed'
import React from 'react'
import { FlatList, Alert, View, Button } from 'react-native'

import users from '../data/users'

export default function (props) {
    
    function confirmuserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete ' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getEdit(user) {
        props.navigation.navigate('UserForm', user)
    }

    function getDelete(user) {
        confirmuserDeletion(user)      
    }

    function getUserItem ({item: user}) {
        return (
            <ListItem key={user.id} bottomDivider onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon name="edit" size={25} color="orange" onPress={() => getEdit(user)}></Icon>
                <Icon name="delete" size={25} color="red" onPress={() => getDelete(user)}></Icon>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}