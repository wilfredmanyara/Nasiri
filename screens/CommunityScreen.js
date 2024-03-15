import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const CommunityScreen = () => {
  // Placeholder data for posts
  const [posts, setPosts] = useState([]);

  // Function to fetch posts from an API or local storage
  const fetchPosts = async () => {
    // Fetch posts from API or local storage
    // Example:
    // const response = await fetch('YOUR_API_ENDPOINT/posts');
    // const data = await response.json();
    // setPosts(data);
    
    // Placeholder data
    const data = [
      { id: 1, title: 'Post 1', content: 'Content of post 1' },
      { id: 2, title: 'Post 2', content: 'Content of post 2' },
      { id: 3, title: 'Post 3', content: 'Content of post 3' },
    ];
    setPosts(data);
  };

  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();
  }, []);

  // Function to render individual post items
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.postItem}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Forum</Text>

      {/* List of posts */}
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.postList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  postList: {
    flex: 1,
  },
  postItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CommunityScreen;
