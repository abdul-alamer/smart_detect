import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView} from 'react-native';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';
import ButtonView from './ManageButtons'
import ReportTable from './DataTable';


export default class Report extends Component{


    render(){


        return(
            
            <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <TouchableOpacity style={{alignItems:'flex-end',margin:16}} 
                onPress={this.props.navigation.openDrawer}>
                    <FontAwesome5 name="bars" size={24} color="#161924" />

                </TouchableOpacity>
                <View style={{flex:1, alignItems:'center',justifyContent:'center',padding:5,}}>
                   

            <ReportTable/>
                </View>
            </SafeAreaView>
        </View>



        )
    }
}


const styles = StyleSheet.create({
    container:{
    
    
    flex:1,
    backgroundColor:'#FFF',
    },
    
    text :{
    
    color: '#161924',
    fontSize:24,
    fontWeight:'500'
    
    }
    
    
    
    })
    