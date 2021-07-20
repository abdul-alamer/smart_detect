import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,} from 'react-native';





export default function FilledButton({title,style,onPress}) {
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
    backgroundColor: 'black',
    width:300,
    alignItems: 'center',
    justifyContent:'center',
    padding: 20,
    borderRadius:8,
    

  },
  text:{
      color:'white',
      fontWeight:'500',
      fontSize:16,
  }

});
