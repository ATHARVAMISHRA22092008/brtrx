import {createDrawerNavigator} from 'react-navigation-drawer';
import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';

import CustomSideBar from './CustomSideBar';
export const AppDrawerNavigator=createDrawerNavigator({
    home : {
        screen : AppTabNavigator
    },
},
{
    contentComponent : CustomSideBar
},
{
    intialRouteName : "home"
});