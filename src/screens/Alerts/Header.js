import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView} from 'react-native';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';
import Info from '../profile/InfoBox'

const Header =({type}) => {


        
    const ShowCurrentDate=()=>{
     
          var date = new Date().getDate();
          var month = new Date().getMonth() + 1;
          var year = new Date().getFullYear();
          var hours = new Date().getHours(); //To get the Current Hours
          var min = new Date().getMinutes(); //To get the Current Minutes
          var sec = new Date().getSeconds(); //To get the Current Seconds
     return(date+'/'+month+'/'+year+' '+hours+':'+min+':'+sec)
       //   Alert.alert(date + '-' + month + '-' + year);
     
         }

    return (
        <View style={styles.container}>
           
            <Text style={{color:'red', fontSize:40,margin:2}}>ALERT</Text>
            <Text style={{paddingLeft:200,fontWeight:'200'}}> {ShowCurrentDate()}</Text>
            
        
            <Text style={styles.text}>{type.toUpperCase()}</Text>



        </View>
    )
}


const styles = StyleSheet.create({

container:{
backgroundColor:'lightgray',
borderRadius:8,
width:'100%',




},
 text :{
     fontSize:15,
     padding:5,
     color:'white',
     borderRadius:8,
     backgroundColor:'red',
     fontWeight:'bold'
 }



})


export default Header;