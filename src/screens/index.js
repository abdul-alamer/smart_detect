import React from 'react';
import Screen from './screen';
import Profile from './profile/MainProfile'
import Report from './report/Report'
import Alert from './Alerts/Alert'

export const ProfileScreen = ({navigation,data1}) => <Profile navigation ={navigation} name = "abdulrahman sadaqa" data1 = {":"+data1}/> 
export const MessageScreen = ({navigation}) => <Screen navigation ={navigation} name = "MessageScreen"/>
export const Logout = ({navigation}) => <Screen navigation ={navigation} name = "Logout"/>
export const AlertScreen = ({navigation}) => <Alert navigation ={navigation} name = "ListScreen 1"/>
export const ReportScreen = ({navigation}) => <Report navigation ={navigation} name = "ReportScreen"/>
export const StaticesScreen = ({navigation}) => <Screen navigation ={navigation} name = "StaticesScreen"/>
export const SignOutScreen = ({navigation}) => <Screen navigation ={navigation} name = "SignOutScreen"/>
