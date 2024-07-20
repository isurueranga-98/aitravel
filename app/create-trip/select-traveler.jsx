import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors'
import {SelectTravelerList} from './../../constants/Option'
import OptionCard from './../../components/CreateTrip/OptionCard'
export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();
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
      height:'100%'
    }}>
      <Text style={{
        fontSize: 25,
        fontFamily:'outfit-Bold',
        marginTop:20
      }}>Who is Travelling</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit',
          fontSize:20,
          marginTop:20
        }}>Choose Your Yravelers</Text>

        <FlatList
          data={SelectTravelerList}
          renderItem={({item,index}) => (
            <View style={{
              marginVertical:10
            }}>
              <OptionCard option={item}/>
            </View>
          )}
        />
      </View>
    </View>
  )
}