import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function Heading({children,style,...props}) {
  return (
    
    <View>
  <Text {...props} style={[styles.text, style]}>



       {children}
       
       
       
       </Text>
    
    </View>
    
  );
}

const styles = StyleSheet.create({

text:{
    //fontWeight:'bold',
    fontSize:35,
  //fontWeight:'bold',
    color:'black'
},





});