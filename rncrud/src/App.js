import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from '@rneui/base';
import { UsersProvider } from './context/UsersContext';

const Stack = createNativeStackNavigator();

export default function (props) {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='UserList'
                    screenOptions={screnOptions}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Usuários",
                                headerRight: () => {
                                    return (
                                        <Button
                                            onPress={() => navigation.navigate("UserForm")}
                                            type="clear"
                                            icon={<Icon name='add' size={25} color="white"></Icon>}
                                        />
                                    )
                                }
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{ title: "Formulário de Usuários" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screnOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeigth: 'bold'
    }
};