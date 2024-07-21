import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from './../../context/CreateTripContext';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

import { SelectBudgetOption } from '../../constants/Option';
import OptionCard from './../../components/CreateTrip/OptionCard'

export default function SelectBudget() {

  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState()

  const router=useRouter()

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
      }}>Budget</Text>

      <View style={{
        marginTop:20
      }}>

          <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
          }}>
            Choose Spending habits for your trip
          </Text>

          <FlatList 
            data={SelectBudgetOption}
            renderItem={({item,index})=>{
              <View>
                <OptionCard option={item} selectedOption={selectedOption}/>
              </View>
            }}
          />
      </View>
    </View>
  );
}
