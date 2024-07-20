import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '../../components/MyTrip/StartNewTripCard';

export default function mytrip() {

  const [userTrip, setUserTrip] = useState([]);

  return (
    <View 
      style={{
        padding:25,
        paddingTop:55,
        backgroundColor:Colors.WHITE,
        height:'100%',
      }}
    >
      <View
        style={{
          display:'flex',
          flexDirection:'row',
          alignContent:'center',
          alignItems:'center',
          justifyContent:'space-between'
        }}
      >
        
        <Text
          style={{
            alignItems:'center',
            fontFamily:'outfit-Bold',
            fontSize:30,
          }}
        >My Trip</Text>
        <Ionicons name="add-circle" size={40} color="black" />
      </View>

      {userTrip?.length==0?
        <StartNewTripCard/> : null
      }
    </View>
  )
}