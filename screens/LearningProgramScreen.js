import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// Assume you have a function to fetch articles and videos from an API
const fetchContent = async () => {
  // Make API call to fetch articles and videos
  const response = await fetch('https://example.com/api/content');
  const data = await response.json();
  return data;
};

export default function LearningProgramScreen({ navigation }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetch content when component mounts
    const fetchData = async () => {
      const data = await fetchContent();
      setContent(data);
    };

    fetchData();
  }, []);

  const navigateToContent = (contentId) => {
    // Navigate to the selected content (article, video, quiz, etc.)
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Learning Program</Text>
      </View>
      
      {/* Display fetched content */}
      {content.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => navigateToContent(item.id)} style={styles.contentCard}>
          <Text style={styles.contentText}>{item.type}: {item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  contentCard: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  contentText: {
    fontSize: 16,
    color: '#2c3e50',
  },
});
