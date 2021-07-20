import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,} from 'react-native';





export default function TextButton({title,style,onPress}) {
  return (
    
    <View >
        <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
        
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
   // backgroundColor: 'black',
    width:300,
    alignItems: 'center',
    justifyContent:'center',
    alignItems:'flex-end',
   // float:'right',
    borderRadius:8,
    

  },
  text:{
      color:'black',
      fontWeight:'500',
      fontSize:14,
    //  backgroundColor:'black'
  },
  
  

});
