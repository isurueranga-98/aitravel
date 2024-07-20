import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
export default function CreateTripCard({option,selectedTravaler}) {
  return (
    <View
      style={[{
        padding:25,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#f2f2f2',
        borderRadius:15,
      }, selectedTravaler?.id==option?.id&&{borderWidth:2, backgroundColor:Colors.PRIMARY}]}> 
      <View>
        <Text style={
          [{
            fontSize: 20,
            fontFamily: 'outfit-Medium'
          },selectedTravaler?.id==option?.id&&{color:Colors.WHITE}]
        }>{option?.title}</Text>

        <Text style={[{
          fontSize:17,
          fontFamily:'outfit',
          color:Colors.GRAY
        },selectedTravaler?.id==option?.id&&{color:Colors.WHITE}]}>
          {option?.desc}
        </Text>
      </View>
      <Text style={{
        fontSize: 30,
      }}>
        {option.icon}
      </Text>
    </View>
  )
}