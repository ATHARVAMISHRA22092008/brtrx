import {DrawerItems} from 'react-navigation-drawer';
import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class CustomeSideBar extends React.Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems {...this.props}/>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("WelcomeScreen")
                        firebase.auth().signOut()
                    }}><Text>Sign Out</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}