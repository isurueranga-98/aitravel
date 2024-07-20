import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from 'expo-router'
import { Colors } from '@/constants/Colors'

export default function SignIn() {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  })
  return (
    <View style={{
      padding:20,
      paddingTop:50,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-Bold',
        fontSize:30
      }}>Let's Sign You In</Text>


      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20
      }}>Welcome Back</Text>


      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20
      }}>Yoy have been missed</Text>

      <View>
        <Text style={{
          fontFamily:'outfit',
          fontSize:15,
          color:Colors.GRAY,
          marginTop:20
        }}>Email</Text>
        <TextInput
          style={{
            borderBottomColor:Colors.GRAY,
            borderBottomWidth:1,
            padding:10,
            fontSize:20
          }}
        />
      </View>
    </View>
  )
}