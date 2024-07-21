import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from './../../context/CreateTripContext';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

export default function SelectDates() {

  const [startDate,setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);


  
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

  const onDateChange = (date,type) => {
    console.log(date,type);
    if(type === 'START_END'){
        setStartDate(moment(date))
    }else{
      setEndDate(moment(date))
    }
  };

  const onDateSelectionContinue =()=>{
      if(!endDate&&!startDate){
        ToastAndroid.show('Please Select Start and End Date', ToastAndroid.LONG);
        return;
      }

      const totalNoOfDate = endDate.diff(startDate,'days');
      console.log(totalNoOfDate);
      setTripData({
        ...tripData,
        startDate: startDate,
        endDate: endDate,
        totalNoOfDate:totalNoOfDate
      });
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
        fontFamily: 'Outfit-Bold',
        marginTop: 20
      }}>Select Dates</Text>
      
      <View style={{
        marginTop:30
      }}>

        <CalendarPicker onDateChange={onDateChange} minDate={new Date()} maxRangeDuration={5} allowRangeSelection={true}/>

        <View>
        <TouchableOpacity onPress={onDateSelectionContinue} style={{
        backgroundColor: Colors.PRIMARY,
        padding: 10,
        borderRadius: 15,
        marginTop: 20
      }}>
        {/* <Link href={'/create-trip/select-dates'}> */}
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit-Medium',
            color: Colors.WHITE,
            textAlign: 'center'
          }}>Next</Text>
        {/* </Link> */}
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
