import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
export default class Settings extends React.Component{
    render(){
        return(
            <View>
                <Text>Settings</Text>
            </View>
        
        );
    }
}