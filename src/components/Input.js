import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput} from 'react-native';

export default function Input({style,...props}) {
  return (
    
    <View style={styles.container}>
  <TextInput {...props} style={[styles.input,style]} />
  

    </View>
    
  );
}

const styles = StyleSheet.create({

input:{
   backgroundColor:'lightgray',
   width:300,
   padding:20,
   borderRadius:8
},
container:{

marginVertical:8

}





});