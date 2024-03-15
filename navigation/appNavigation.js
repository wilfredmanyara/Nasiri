import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';

// Import all screens
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MoodEntryScreen from '../screens/MoodEntryScreen';
import AnalysisResultScreen from '../screens/AnalysisResultScreen';
import CommunityScreen from '../screens/CommunityScreen';
import LearningProgramScreen from '../screens/LearningProgramScreen';
import ChatPlartformScreen from '../screens/ChatPlartformScreen';
import VideoConferenceScreen from '../screens/VideoConferencingScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name='MoodEntry' options={{ headerShown: false }} component={MoodEntryScreen} />
          <Stack.Screen name='AnalysisResult' options={{ headerShown: false }} component={AnalysisResultScreen} />
          <Stack.Screen name='Community' options={{ headerShown: false }} component={CommunityScreen} />
          <Stack.Screen name='VideoConference' options={{ headerShown: false }} component={VideoConferenceScreen} />
          <Stack.Screen name='ChatPlartform' options={{ headerShown: false }} component={ChatPlartformScreen} />
          <Stack.Screen name='LearningProgram' options={{ headerShown: false }} component={LearningProgramScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' options={{ headerShown: false }} component={WelcomeScreen} />
          <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name='SignUp' options={{ headerShown: false }} component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
