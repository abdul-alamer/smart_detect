
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';






export default function Error({ErorrMessage}) {
  return (
    <View style={styles.container}>
 
  <Text style={styles.text} >
{ErorrMessage}

  </Text>
  </View>
    
  );
}

const styles = StyleSheet.create({
    text: {
  color:'red',
  fontWeight:'bold'
  },
  container:{
paddingVertical:8,

  }

});
