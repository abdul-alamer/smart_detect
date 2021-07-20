import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,} from 'react-native';
import {FontAwesome5,AntDesign,Entypo,Feather,MaterialCommunityIcons,MaterialIcons,Octicons} from '@expo/vector-icons';

export default function ButtonView() {



    return(

<View style={{ flexDirection: 'row',}}>



        <View style={styles.container}>
        <TouchableOpacity   style={{flexDirection:'row'}}>
        <Feather name="refresh-ccw" size={18} color="black" />
            <Text style={styles.text}>Refresh</Text>
        </TouchableOpacity>
        </View>



        
        <View style={styles.container}>
        <TouchableOpacity   style={{flexDirection:'row'}}>
        <FontAwesome5 name="file-import" size={18} color="black" />
            <Text style={styles.text}>CVS/xlxx</Text>
        </TouchableOpacity>
        </View>



        <View style={styles.container}>
        <TouchableOpacity   style={{flexDirection:'row'}} >
        <MaterialCommunityIcons name="table-search" size={18} color="black" />
            <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
        </View>




        </View>
   
    )




}

const styles = StyleSheet.create({
    container: {
           // marginBottom:50,
     marginRight:5,
      backgroundColor: 'white',
      width:100,
   //   height:80,
    flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 5,
  
    },
    text:{
      marginLeft:5,
        color:'black',
        fontWeight:'100',
        fontSize:16,
    }
  
  });