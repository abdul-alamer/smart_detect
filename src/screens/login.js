//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { Component, useState,  } from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View,Image,ActivityIndicator,ScrollView} from 'react-native';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton'
import Error from '../components/Error';
import {FontAwesome5,AntDesign,Entypo,Feather,MaterialCommunityIcons,MaterialIcons,Octicons} from '@expo/vector-icons';
import Data from '../api/w'

export default function Login({navigation})
{ 
  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const [newtext,setnewtext] = useState('');
  const [isLoading,setisLoading] = useState(false);



  async function onCreatePost(){
    navigation.navigate('Home',);
   /* try{
      setisLoading(true)
      await fetch('http://192.168.1.18:7457/login',{
        method:'POST',
    
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          username:username,
          password:password
        })
      }).then((response) => response.json())
      .then((responseJson) => {
        
     
     if (responseJson.result.length == 0){
      setisLoading(false)
     setnewtext("Wrong username or password");}
     else
     {  setnewtext(responseJson.result[0])
      
       setisLoading(false)


         navigation.navigate('Home',{data:responseJson.result});
        }
      })
      .catch((error) => setnewtext(error.message))
      .finally(() => setisLoading(false));

    }
    catch(e){
      if(e)
      setnewtext("Network Unreachable")
    }

    finally{setisLoading(false)}*/
    
  }


  return (
    <ScrollView>
    <View style={styles.container}>
  
    
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/112.png')}
      /><ActivityIndicator size="large" animating={isLoading} color="gray" />
      <Error ErorrMessage={newtext}/>{/**check your server connection. */}
      <Input placeholder={'Email'} keyboardType={'email-address'} onChangeText={username => setusername(username)}/>
      <Input placeholder={'Password'} secureTextEntry onChangeText={password => setpassword(password)} />
      {/*"isLoading :"+isLoading*/}
      
      <FilledButton title={'login'} style={styles.loginButton} onPress={()=>{
        onCreatePost()
    
     
      }}></FilledButton>
      {}
      <TextButton title={'Create one?'} onPress={ ()=>{} }></TextButton>
    
   

   
    </View>
    </ScrollView>
   
  );
  
}


const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250,
    borderRadius:30,
    
  },
container:{
    flex: 1,
 //   source={require('../../assets/c2.png')},
  paddingTop:120,
  paddingBottom:50,
    alignItems: 'center',
    
    },
    title:{
marginBottom:48,


    },
    loginButton:{
      marginVertical:32,
    },
    
    newAcc:{
      alignItems:'flex-end',
    },
    


})