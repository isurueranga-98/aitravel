import { View, Text, FlatList, TouchableOpacity, ToastAndroid, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from './../../context/CreateTripContext';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { AI_PROMT } from '../../constants/Option';
import { chatSession } from '../../configs/AiModle';

export default function GenerateTrip() {

  const {tripData,setTripData} = useContext(CreateTripContext);
  const [loading,setLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {
    tripData&&GenerateAiTrip()
  },[tripData])

  const GenerateAiTrip =async () => {
    setLoading(true);
    const FINAL_PROMPT =AI_PROMT
    .replace('{location}',tripData?.locationInfo.name)
    .replace('{totalDays}',tripData?.totalNoOfDate)
    .replace('{totalNights}',tripData?.totalNoOfNights-1)
    .replace('{traveler}',tripData?.traveler?.title)
    .replace('{budget}',tripData?.budget)
    .replace('{totalDays}',tripData?.totalNoOfDate)
    .replace('{totalNights}',tripData?.totalNoOfDate-1);

    console.log(FINAL_PROMPT)

  // const result = await chatSession.sendMessage(FINAL_PROMPT);
  // console.log(result.response.text());

  setLoading(false)

  router.push('(tabs)/mytrip')
  }
  return ( 
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Text style={{
        fontFamily:'outfit-Bold',
        fontSize:35,
        textAlign:'center'
      }}>Please Wait</Text>
      <Text style={{
        fontFamily:'outfit-Bold',
        fontSize:20,
        textAlign:'center',
        marginTop:40
      }}>We are working to genarate your deram trip</Text>
      <Image  source={require('./../../assets/images/trip-vacation-mode.gif')} style={{
        width:300,
        height:300,
        alignSelf:'center',
        marginTop:40
      }}/>
    </View>

  )
}