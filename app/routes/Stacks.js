import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../components/Home/Products/Product'
import Details from '../components/Home/Details/Details'
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