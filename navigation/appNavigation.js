import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import useAuth from '../hooks/useAuth';
import MoodEntryScreen from '../screens/MoodEntryScreen';
import AnalysisResultScreen from '../screens/AnalysisResultScreen';
import CommunityScreen from '../screens/CommunityScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const {user} = useAuth();
  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name='MoodEntry' options={{headerShown: false}} component={MoodEntryScreen} />
        <Stack.Screen name='AnalysisResult' options={{headerShown: false}} component={AnalysisResultScreen} />
        <Stack.Screen name='Community' options={{headerShown: false}} component={CommunityScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' options={{headerShown: false}} component={WelcomeScreen} />
          <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name='SignUp' options={{headerShown: false}} component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}