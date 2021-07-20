import 'react-native-gesture-handler';
import * as React from 'react';

import { StyleSheet, Text, View, Button  } from 'react-native';
import Login from './src/screens/login';
import {FontAwesome5,AntDesign,Entypo,Feather,MaterialCommunityIcons,MaterialIcons,Octicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/home'
import AuthStackNavigator from './src/components/AuthStackNavigator'

const RootStack = createStackNavigator();



export default function App() {
  return (
    
   <NavigationContainer>
     <RootStack.Navigator screenOptions={{headerShown:false}}>
     <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />


     </RootStack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
 
  },
});
