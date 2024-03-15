import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async ()=>{
      if(email && password){
        try{
          await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
          console.log('got error: ',err.message);
        }
      }
    }
  return (
    <View className='flex-1 bg-gray-900'>
      <SafeAreaView className='flex'>
        <View className='flex-row justify-start'>
            <TouchableOpacity onPress={()=> navigation.goBack()} className='bg-green-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'>
                <ArrowLeftIcon size='20' color='black'/>
            </TouchableOpacity>
        </View>
        <View className='flex-row justify-center'>
            <Image source={require("../assets/images/welcome.png")}
                        style={{width: 200, height: 200}} />
        </View>
      </SafeAreaView>
      <View className='flex-1 bg-white px-8 pt-8'>
        <View className='form space-y-2'>
            <Text className='text-gray-700 ml-4'>Email Address</Text>
            <TextInput className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3' value={email} onChangeText={value=> setEmail(value)} placeholder='Enter Email'/>
            <Text className='text-gray-700 ml-4'>Password</Text>
            <TextInput className='p-4 bg-gray-100 text-gray-700 rounded-2xl' secureTextEntry value={password} onChangeText={value=> setPassword(value)} placeholder='Enter Password'/>
            <TouchableOpacity className='flex items-end mb-5'>
                <Text className='text-gray-700 '>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity className='py-3 bg-green-500 rounded-xl' onPress={handleSubmit}>
                <Text className='font-xl font-bold text-center'>Login</Text>
            </TouchableOpacity>
        </View>
        <View className='flex-row justify-center'>
            <Text className='font-semibold'>Don't have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                <Text className='font-semibold text-green-500'> Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}