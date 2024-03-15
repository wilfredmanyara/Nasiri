import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const chatRoomsData = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
    { id: 3, name: 'Room 3' },
  ];
  
  const messagesData = {
    1: [
      { id: 1, text: 'Message 1', userId: 1 },
      { id: 2, text: 'Message 2', userId: 2 },
    ],
    2: [
      { id: 3, text: 'Message 3', userId: 1 },
      { id: 4, text: 'Message 4', userId: 3 },
    ],
    3: [
      { id: 5, text: 'Message 5', userId: 2 },
      { id: 6, text: 'Message 6', userId: 3 },
    ],
  };
  

  const fetchChatRooms = async () => {
    // Simulate fetching chat rooms from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(chatRoomsData);
      }, 1000); // Simulate delay
    });
  };

  const fetchMessagesForRoom = async (roomId) => {
    // Simulate fetching messages for a specific room from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(messagesData[roomId] || []);
      }, 1000); // Simulate delay
    });
  };

export default function ChatPlartformScreen({ navigation }) {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rooms = await fetchChatRooms();
      setChatRooms(rooms);
    };

    fetchData();
  }, []);

  const handleJoinChatRoom = async (roomId) => {
    setSelectedRoom(roomId);
    const roomMessages = await fetchMessagesForRoom(roomId);
    setMessages(roomMessages);
  };

  const renderChatRooms = ({ item }) => (
    <TouchableOpacity onPress={() => handleJoinChatRoom(item.id)} style={styles.roomItem}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Group Chat</Text>
      
      {/* Chat Room List */}
      <FlatList
        data={chatRooms}
        renderItem={renderChatRooms}
        keyExtractor={(item) => item.id}
        style={styles.roomList}
      />

      {/* Messages */}
      {selectedRoom && (
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          style={styles.messageList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  roomList: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  roomItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  messageList: {
    flex: 1,
    width: '100%',
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  messageText: {
    fontSize: 16,
  },
});
