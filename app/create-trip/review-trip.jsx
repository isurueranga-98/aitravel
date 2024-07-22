import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from './../../context/CreateTripContext';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewTrip() {
  const navigation = useNavigation();

  const {tripData,setTripData} = useContext(CreateTripContext);
  const router = useRouter()
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);
  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Text style={{
        fontSize: 25,
        fontFamily: 'outfit-Bold',
        marginTop: 20
      }}>Review Your Trip</Text>


      <View style={{
        marginTop:20,
        gap:25
      }}>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
          }}>
            Before genarating you trip, Pleas review your selection
          </Text>

          <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
          }}>
            {/* <Ionicons name="location" size={34} color="black" /> */}
            <Text style={{
              fontSize:30
            }}>🚧</Text>
            <View>
              <Text style={{
                fontFamily:'outfilt',
                fontSize:20,
                color:Colors.GRAY
              }}>Destination</Text>
              <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
              }}>{tripData?.locationInfo.name}</Text>
            </View>
          </View>

          <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
          }}>
            {/* <Ionicons name="location" size={34} color="black" /> */}
            <Text style={{
              fontSize:30
            }}>📅</Text>
            <View>
              <Text style={{
                fontFamily:'outfilt',
                fontSize:20,
                color:Colors.GRAY
              }}>Travel Date</Text>
              <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
              }}>{moment(tripData?.startDate).format('DD MMM') + " to " + moment(tripData?.endDate).format('DD MMM')} ({tripData?.totalNoOfDate} days)</Text>
            </View>
          </View>




          <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
          }}>
            {/* <Ionicons name="location" size={34} color="black" /> */}
            <Text style={{
              fontSize:30
            }}>🧑‍🤝‍🧑</Text>
            <View>
              <Text style={{
                fontFamily:'outfilt',
                fontSize:20,
                color:Colors.GRAY
              }}>Who is Travelling</Text>
              <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
              }}>{tripData?.traveler?.title}</Text>
            </View>
          </View>


          <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
          }}>
            {/* <Ionicons name="location" size={34} color="black" /> */}
            <Text style={{
              fontSize:30
            }}>💰</Text>
            <View>
              <Text style={{
                fontFamily:'outfilt',
                fontSize:20,
                color:Colors.GRAY
              }}>Budget</Text>
              <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20
              }}>{tripData?.budget}</Text>
            </View>
          </View>


          <TouchableOpacity onPress={()=>router.replace('/create-trip/generate-trip')} style={{
        backgroundColor:Colors.PRIMARY,
        padding:10,
        borderRadius:15,
        marginTop:20
      }}>

        
        <Text style={{
          fontSize:20,
          fontFamily:'outfit-Medium',
          color:Colors.WHITE,
          textAlign:'center'
        }}>Build My Trip</Text>
      </TouchableOpacity>



      </View>
    </View>
  )
}