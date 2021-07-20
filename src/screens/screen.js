import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView} from 'react-native';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';


export default class Screen extends Component{





    render(){

        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16}} 
                    onPress={this.props.navigation.navigate('Login')}>
                        <FontAwesome5 name="bars" size={24} color="#161924"/>

                    </TouchableOpacity>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.text}>{this.props.name} Screen{this.props.me}</Text>
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
