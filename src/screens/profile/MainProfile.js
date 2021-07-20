import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView} from 'react-native';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';
import IMGprof from './profileIMG'
import { Divider } from 'react-native-elements';
import Info from './InfoBox'

export default class Profile extends Component{
    constructor(props){
        super(props);  
    }

render(){ // here the data should arrived
    var types = ['Email','Staff Id', 'Phone #', 'Usesrname', 'Supervisor'];
    var data = ['abdulsadaqa1@gmail.com', '201612063', '+970 597168246', 'a.sadaqa2','Dr.Rafaat Amarneh'];

    return(
        <View style={styles.container}>
        <SafeAreaView style={{flex:1}}>
            <TouchableOpacity style={{alignItems:'flex-end',margin:16}} 
            onPress={this.props.navigation.openDrawer}>
                <FontAwesome5 name="bars" size={24} color="#161924"/>

            </TouchableOpacity>
          
            <View style={{ alignItems:'center', justifyContent:'center',margin:50}}>
           
                <IMGprof></IMGprof>
                <Divider style={{ backgroundColor: 'lightgray', width:350, height:3,borderRadius:10 }} />
                <Text style={styles.text}>{this.props.name}</Text>
                <Text style={{fontSize:20}}>security guards</Text>
                <Divider style={{ backgroundColor: 'lightgray', width:350, height:3,borderRadius:10 }} />
                </View>
                <Info data={data} types={types}/>   
            
        </SafeAreaView>
    </View>


    );

}



}



const styles = StyleSheet.create({
    container:{


        flex:1,
        backgroundColor:'#FFF',
        },
        lineStyle:{
            borderWidth: 3,
            borderColor:'gray',
           /* borderBottomStyle:'hidden',
            borderLeftStyle:'hidden',
            borderRightStyle:'hidden',*/
            borderRadius:5,
            margin:10,
            padding:20
       },
        text :{
        
        color: '#161924',
        fontSize:24,
        fontWeight:'500',
        fontWeight:'bold'
        
        }
        


}) 