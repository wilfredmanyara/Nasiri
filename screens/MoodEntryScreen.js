import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const MoodEntryScreen = ({ navigation }) => {
  const [mood, setMood] = useState('');

  const analyzeMood = async () => {
    try {
      const response = await fetch('YOUR_MOOD_ANALYSIS_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood }),
      });

      const result = await response.json();
      navigation.navigate('AnalysisResult', { moodAnalysisResult: result.analysis });
    } catch (error) {
      console.error('Error analyzing mood:', error);
    }
  };

  return (
    <View>
      <Text>MoodEntryScreen</Text>
      <TextInput
        placeholder="Enter your mood here"
        value={mood}
        onChangeText={(text) => setMood(text)}
      />
      <Button title="Analyze Mood" onPress={analyzeMood} />
    </View>
  );
};

export default MoodEntryScreen;
