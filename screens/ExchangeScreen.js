import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
export default class Exchange extends React.Component{
    sendNotifications=(bookDetails, requestStatus)=>{
        var requestId=bookDetails.request_id;
        var donerId=bookDetails.doner_id;
        db.collection("all_notifications")
        .where("request_id", "==", requestId)
        .where("doner_id", "==", donerId).get()
        .then((snapshot)=>{
          snapshot.forEach((doc)=>{
            var message="";
            if(requestStatus=="Book Sent"){
              message=this.state.donerName+" has sent you an item"
            }
            else{
              message=this.state.donerName+"has shown interest in donating the item"
            }
            db.collection("all_notifications").doc(doc.id).update({
              "message" : message,
              "notification_status" : "unread",
              "date" : firebase.firestore.FieldValue.serverTimestamp()
            })
          })
        })
        
      }
      sendBook=(bookDetails)=>{
        if(bookDetails.request_status==="Book Sent"){
          var requestStatus="donerInterested";
          db.collection("all_donations").doc(bookDetails.doc_id).update({
            "request_status" : "donerInterested"
          })
          this.sentNotifications(bookDetails, requestStatus)
        }
        else{
          var requestStatus="Book Sent"
        }
      }
      addNotification = () =>{
        var message=this.state.userName + "has shown interest in donating the item"
        db.collection("all_notifications").add({
          "targeted_user_id" : this.state.recieverId,
          "doner_id" : this.state.userId,
          "request_id" : this.state.requestId,
          "book_name" : this.state.bookName,
          "date" : firebase.firestore.FieldValue.serverTimesstamp(),
          "message" : message,
        })
      }
    render(){
        return(
            <View>
                <TextInput style={{borderRadius: 100, borderColor: 'Black'}}></TextInput>
                <TextInput style={{borderRadius: 100, borderColor: 'Black'}}></TextInput>
                <TouchableOpacity style={{borderRadius: 100, borderColor: 'Orange', backgroundColor: 'Orange'}}><Text>Add Item</Text></TouchableOpacity>
            </View>
        
        );
    }
}