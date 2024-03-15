import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await signOut(auth);
    // Navigate to login/signup screen after logout
    navigation.navigate('Login');
  };

  const navigateToMoodEntry = () => {
    navigation.navigate('MoodEntry');
  };

  const navigateToChatPlartform = () => {
    navigation.navigate('ChatPlartform');
  };

  const navigateToAnalysisResult = () => {
    navigation.navigate('AnalysisResult');
  };

  const navigateToCommunity = () => {
    navigation.navigate('Community');
  };

  const navigateToLearningProgram = () => {
    navigation.navigate('LearningProgram');
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Homepage - </Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{ padding: 10, backgroundColor: 'red', borderRadius: 8, marginTop: 10 }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Logout</Text>
      </TouchableOpacity>

      {/* Navigation Buttons */}
      <TouchableOpacity onPress={navigateToMoodEntry} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, color: 'blue' }}>Go to Mood Entry</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToMoodEntry} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, color: 'blue' }}>Go to Chat Plartform</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToAnalysisResult} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, color: 'green' }}>Go to Analysis Result</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToCommunity} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, color: 'orange' }}>Go to Community</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToLearningProgram} style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, color: 'purple' }}>Go to Learning Program</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
