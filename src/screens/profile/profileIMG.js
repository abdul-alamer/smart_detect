import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image} from 'react-native';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';



export default class IMGprof extends Component{

    render(){
        return(
<View>
<Image
        style={styles.img}
        source={require('../../../assets/p1.png')}
      />


</View>
        )


    }
}

const styles = StyleSheet.create({
    container:{

        },
        
        img :{
            height: 150,
            width: 150,
            borderRadius: 150/2,
        
        }
        


}) 