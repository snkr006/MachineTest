import React from 'react';
import { Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack } from './Stacks';
import Category from '../components/Category/Category'
import Studio from '../components/Studio/Studio'
import Explore from '../components/Explore/Explore';
import Profile from '../components/Profile/Profile'

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width

const MyTabs = () => {
    return (
        <Tab.Navigator initialRouteName="HomeStack"
            screenOptions={{
                keyboardHidesTabBar: true,
                tabBarActiveTintColor: '#F53E6B',
                showLabel: true,
                headerShown: false
            }}>
            <Tab.Screen name="HomeStack" component={HomeStack}
                options={({ route }) => ({
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 0.069 * windowWidth, width: 0.069 * windowWidth, resizeMode: 'contain', tintColor: focused ? '#F53E6B' : 'black' }}
                            source={require('../images/icons/home.png')} />
                    )
                })}
            />
            <Tab.Screen name="Categories" component={Category}
                options={({ route }) => ({
                    tabBarLabel: "Categories",
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 0.069 * windowWidth, width: 0.069 * windowWidth, resizeMode: 'contain', tintColor: focused ? '#F53E6B' : 'black' }}
                            source={require('../images/icons/category.png')} />
                    )
                })}
            />
            <Tab.Screen name="Studio" component={Studio}
                options={({ route }) => ({
                    tabBarLabel: "Studio",
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 0.069 * windowWidth, width: 0.069 * windowWidth, resizeMode: 'contain', tintColor: focused ? '#F53E6B' : 'black' }}
                            source={require('../images/icons/studio.png')} />
                    )
                })}
            />
            <Tab.Screen name="Explore" component={Explore}
                options={({ route }) => ({
                    tabBarLabel: "Explore",
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 0.069 * windowWidth, width: 0.069 * windowWidth, resizeMode: 'contain', tintColor: focused ? '#F53E6B' : 'black' }}
                            source={require('../images/icons/explore.png')} />
                    )
                })}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={({ route }) => ({
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 0.069 * windowWidth, width: 0.069 * windowWidth, resizeMode: 'contain', tintColor: focused ? '#F53E6B' : 'black' }}
                            source={require('../images/icons/profile.png')} />
                    )
                })}
            />

        </Tab.Navigator>
    );
}

export default MyTabs