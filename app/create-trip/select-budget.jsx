import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
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
  const {tripData, setTripData} = useContext(CreateTripContext);
  const router=useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

  useEffect(()=>{
     selectedOption && setTripData({
      ...tripData,
      budget:selectedOption?.title
    });
  },[selectedOption])

  const onClickContinue= () =>{ 
      if(!selectedOption){
        ToastAndroid.show('Select Your Budget', ToastAndroid.LONG);
        return;
      }

      router.push('/create-trip/review-trip');
  }


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
            renderItem={({item,index})=>(
              <TouchableOpacity onPress={()=> setSelectedOption(item)} style={{
                marginVertical:10
              }}>
                <OptionCard option={item} selectedOption={selectedOption}/>
              </TouchableOpacity>
  )}
          />



      <TouchableOpacity onPress={()=>onClickContinue()} style={{
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
        }}>Next</Text>
      </TouchableOpacity>



      </View>
    </View>
  );
}
