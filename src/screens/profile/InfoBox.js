import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,} from 'react-native';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';
import IMGprof from './profileIMG'
import { Divider } from 'react-native-elements';

import { CheckBox } from 'react-native-elements'




export default class Info extends Component{
  constructor(props){
    super(props)  ;
    this.state={
   //   types: ['Email','Staff Id', 'Phone #', 'Username', 'Supervisor'],
  //    data:  ['abdulsadaqa1@gmail.com', '201612063', '+970 597168246', 'a.sadaqa2','Dr.Rafaat Amarneh'],
      /*  ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']*/
    
    }
  }

    render(){

      var info = [];

      for(let i = 0; i < this.props.types.length; i++){
    
        info.push(
          <View style={{flexDirection:'row' ,height:50}}>
          <Text style={[styles.LeftAlign]}>{this.props.types[i]}</Text>
          <Text style={[styles.RightAlign,{textAlign:'right'}]}>{this.props.data[i]}</Text>
        </View>
        )
      }

        return (
            <View style={styles.container}>
      <View style={styles.subContainer}>
       
       
{info}


        </View>
      </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
       marginBottom:60,
       
        justifyContent: 'center'
      },
      subContainer:{
        width: 350,     
        height: 300, 
        margin:100,
        //borderWidth:1, 
        borderColor: "black"
      },
      textStyle:{
        fontSize: 18,
        fontWeight:'bold',
        color:'black', 
        flex:1
      },
      LeftAlign:{
        fontSize: 18,
        fontWeight:'bold',
        color:'black', 
        flex:1


      },
      RightAlign:{
        fontSize: 18,
      //  fontWeight:'bold',
        color:'black', 
        flex:1
      }

})