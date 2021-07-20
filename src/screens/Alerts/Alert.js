import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';
import Header from './Header'
import Info from '../profile/InfoBox'
export default class Alert extends Component{





    render(){
var types = ['CAMERA NO:','SEVERITY RATIO', 'SOURCE INFO', 'INTERNAL/EXTERNAL', 'SITUATION'];
var data = ['CAM-12', '78%', '38 yrs old male', 'external','knife experieance'];
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16}} 
                    onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="#161924"/>

                    </TouchableOpacity>
                   <ScrollView>
                    <View style={styles.AlertBox}>

                    <Header type={'gun detected'} />
                    <View style={{  flex: 1,margin:180,  marginEnd:500}}>
                    <Info data={data} types={types}/>
                    </View>
                    </View>
                    <View style={styles.AlertBox}>

                    <Header type={'fight onset'} />
                    <View style={{  flex: 1,margin:180,  marginEnd:500}}>
                    <Info data={data} types={types}/>
                    </View>
                    </View>





                    </ScrollView>

                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{


flex:1,
backgroundColor:'white',
},
AlertBox:{
    margin:8,
    height:500,
//borderWidth:1,
backgroundColor:'#f8f8ff',
borderRadius:8, 
alignItems:'flex-start',
justifyContent:'flex-start'

},

text :{

color: '#161924',
fontSize:24,
fontWeight:'500'

}



})
