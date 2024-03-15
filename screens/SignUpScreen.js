import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pseudonym, setPseudonym] = useState('');

  const handleSubmit = async () => {
    if (email && password && pseudonym) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Save pseudonym to backend along with other user data
        console.log('Pseudonym:', pseudonym);
      } catch (err) {
        console.log('got error: ', err.message);
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#34D399', padding: 10, borderRadius: 20, marginLeft: 20 }}>
            <ArrowLeftIcon size={20} color='black' />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image source={require("../assets/images/welcome.png")} style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>
      <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#555', marginLeft: 20 }}>Pseudonym</Text>
          <TextInput style={{ backgroundColor: '#F3F4F6', padding: 10, color: '#555', borderRadius: 10 }} value={pseudonym} onChangeText={value => setPseudonym(value)} placeholder='Enter Pseudonym' />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#555', marginLeft: 20 }}>Email Address</Text>
          <TextInput style={{ backgroundColor: '#F3F4F6', padding: 10, color: '#555', borderRadius: 10 }} value={email} onChangeText={value => setEmail(value)} placeholder='Enter Email' />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: '#555', marginLeft: 20 }}>Password</Text>
          <TextInput style={{ backgroundColor: '#F3F4F6', padding: 10, color: '#555', borderRadius: 10 }} secureTextEntry value={password} onChangeText={value => setPassword(value)} placeholder='Enter Password' />
        </View>
        <TouchableOpacity style={{ backgroundColor: '#34D399', padding: 15, borderRadius: 10, alignItems: 'center' }} onPress={handleSubmit}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold', color: '#555' }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontWeight: 'bold', color: '#34D399' }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
