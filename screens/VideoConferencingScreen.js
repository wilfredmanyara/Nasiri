import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';

const VideoConferenceScreen = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [roomId, setRoomId] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const peerConnection = useRef(null);

  useEffect(() => {
    // Request camera and microphone permissions
    const requestUserMedia = async () => {
      const stream = await mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setLocalStream(stream);
    };
    requestUserMedia();

    // Clean up function to release resources when unmounted
    return () => {
      if (localStream) {
        localStream.release();
      }
      if (remoteStream) {
        remoteStream.release();
      }
      if (peerConnection.current) {
        peerConnection.current.close();
      }
    };
  }, []);

  const createOffer = async () => {
    // Create peer connection
    peerConnection.current = new RTCPeerConnection();

    // Add local stream to peer connection
    if (localStream) {
      peerConnection.current.addStream(localStream);
    }

    // Set up event handlers for peer connection
    peerConnection.current.onaddstream = (event) => {
      setRemoteStream(event.stream);
    };

    // Create offer
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);

    // Send offer to signaling server
    // Example: fetch('YOUR_SIGNALING_SERVER_URL', { method: 'POST', body: JSON.stringify({ offer }) });

    setIsConnected(true);
  };

  const joinRoom = async () => {
    // Connect to room using roomId
    // Example: fetch(`YOUR_SIGNALING_SERVER_URL/${roomId}`, { method: 'POST', body: JSON.stringify({ type: 'join' }) });
    createOffer();
  };

  return (
    <View style={styles.container}>
      {!isConnected && (
        <View>
          <Text style={styles.title}>Video Conference</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Room ID"
            value={roomId}
            onChangeText={setRoomId}
          />
          <Button title="Join Room" onPress={joinRoom} />
        </View>
      )}

      {isConnected && (
        <View style={styles.videoContainer}>
          <View style={styles.remoteVideo}>
            {remoteStream && <RTCView streamURL={remoteStream.toURL()} style={styles.video} />}
          </View>
          <View style={styles.localVideo}>
            {localStream && <RTCView streamURL={localStream.toURL()} style={styles.video} mirror={true} />}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  remoteVideo: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  localVideo: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 100,
    height: 150,
    backgroundColor: '#000000',
    borderRadius: 5,
    overflow: 'hidden',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default VideoConferenceScreen;
