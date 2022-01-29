import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../components/Home/Main/Main';

const Home = createNativeStackNavigator()

const HomeStack = () => {

    return (
        <Home.Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
            <Home.Screen name="Main" component={Main} />
        </Home.Navigator>
    )
}

export { HomeStack }