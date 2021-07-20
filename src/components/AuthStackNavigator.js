import 'react-native-gesture-handler';
import * as React from 'react';

import { StyleSheet, Text, View, Button  } from 'react-native';
import Login from '../screens/login';
import {FontAwesome5,AntDesign,Entypo,Feather,MaterialCommunityIcons,MaterialIcons,Octicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'

const AuthStack = createStackNavigator();


export default function AuthStackNavigator() {
  return (
    
   
     <AuthStack.Navigator screenOptions={{headerShown:false}}>
        <AuthStack.Screen name={'Login'} component={Login } />

        <AuthStack.Screen name={'Home'} component={Home} />
     </AuthStack.Navigator>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
 
  },
});
