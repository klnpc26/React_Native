import React from "react";
import TelaA from "../screens/TelaA";
import TelaB from "../screens/TelaB";
import TelaC from "../screens/TelaC";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function (props) {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                    case 'TelaC':
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                        break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })} 
        tabBarOption={{
            activeTintColor: 'red',
            inactiveTintColor: 'red',
            showLabel: false,
        }}
        initialRouteName="TelaA">
            <Tab.Screen name="TelaA" component={TelaA} />
            <Tab.Screen name="TelaB" component={TelaB} />
            <Tab.Screen name="TelaC" component={TelaC} />
        </Tab.Navigator>
    )
}