import 'react-native-gesture-handler';
import * as React from 'react';

import { StyleSheet, Text, View, Button  } from 'react-native';
import Login from '../screens/login';
import {FontAwesome5,AntDesign,Entypo,Feather,MaterialCommunityIcons,MaterialIcons,Octicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Data from '../api/w'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  ProfileScreen,
  MessageScreen,
  Logout,
  AlertScreen,
  ReportScreen,
  StaticesScreen,
  SignOutScreen
  
  }
  from './../../src/screens'

  const Drawer = createDrawerNavigator();

  function MyDrawer({profileInfo}) {
    return (
      <Drawer.Navigator >{/*drawerContent={props => <CustomDrawerContent {...props} />}*/}
        <Drawer.Screen name="profile" component={ProfileScreen}  options={{ drawerIcon:() =><MaterialCommunityIcons name="face-profile" size={30} color= "#161924"/>}}/>
        <Drawer.Screen name="Message" component={MessageScreen}   options={{ drawerIcon:() =><MaterialCommunityIcons name="message-reply-text" size={30} color= "gray"/> }}/>
        <Drawer.Screen name="Alerts" component={AlertScreen} options={{ drawerIcon:() =><Octicons name="alert" size={30} color="#b30000" /> }} />
        <Drawer.Screen name="Reports" component={ReportScreen} options={{ drawerIcon:() =><Octicons name="report" size={30} color= "blue"/> }} />
        <Drawer.Screen name="Statistices" component={StaticesScreen} options={{ drawerIcon:() =><AntDesign name="barschart" size={30} color= "green"/> }} />
        <Drawer.Screen name="Logout" component={Logout} options={{ drawerIcon:() =><AntDesign name="logout" size={30} color="red" /> }} />

        
      </Drawer.Navigator>
    );
  }

  function MainStackNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
  /**<NavigationContainer>
      <MyDrawer />
    </NavigationContainer> */
export default function Home({route}) {
 //   let profileData = route.params.data;

  return (

    
   
    <View style={styles.container}>
        {/*console.log("profiledata:"+profileData)*/}
      <MyDrawer />
    {/*console.log("Here :"+Data[0].id)*/}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
 
  },
});
