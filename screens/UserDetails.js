import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
export default class UserDetails extends React.Component{
    render(){
        return(
            <View>
                getUserDetails=()=>{
                    this.requestRef = db.collection("users")
                    .onSnapshot((snapshot)=>{
                    var userDetails = snapshot.docs.map((doc) => doc.data())
                    this.setState({
                        EmailId : emailId,
                        password : password,
                        FirstName : firstname
                    });
                    })
                }
                    
            </View>
        
        );
    }
}