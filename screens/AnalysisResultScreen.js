import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnalysisResultScreen = ({ route }) => {
  const { moodAnalysisResult } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Analysis Result</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{moodAnalysisResult}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 20,
  },
  resultText: {
    fontSize: 18,
  },
});

export default AnalysisResultScreen;
