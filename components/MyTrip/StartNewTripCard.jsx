import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors'

export default function StartNewTripCard() {
  return (
    <View
      style = {{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25
      }}
    >
      <Ionicons name="location" size={40} color="black" />
      <Text
        style={{
          fontFamily:'outfit-Medium',
          fontSize:25,
          
        }}
      >No Trip Plan Yet</Text>



      <Text
        style={{
          fontFamily:'outfit',
          fontSize:20,
          textAlign:'center',
          color:Colors.GRAY
          
        }}
      >
        Start a new trip by adding a Start a new trip by adding a Start a new trip by adding a
      </Text>


      <TouchableOpacity style={{
        backgroundColor:Colors.PRIMARY,
        padding:15,
        borderRadius:15,
        paddingHorizontal:30
      }}>
        <Text style={{
          fontFamily:'outfit',
          color:Colors.WHITE,
          fontSize:15
        }}>Start a New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}