import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from "./../../context/CreateTripContext"
export default function SearchPlace() {
  const navigation = useNavigation();
  const {tripData, setTripData} = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search Place',
    });
  }, [navigation]);


  useEffect(()=>{
    console.log(tripData)
  }),[tripData]

  return (
    <View  style={{
      padding:25,
      paddingTop:75,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>

    
          <GooglePlacesAutocomplete
              placeholder='Search'
              fetchDetails={true}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                // console.log(data.description);
                // console.log(details?.geometry.location);
                // console.log(details?.photos[0]?.photo_reference)
                // console.log(details?.url)

                // setTripData([...tripData, {
                //   name: data.description,
                //   location: details.geometry.location,
                //   photo: details.photos[0]?.photo_reference,
                //   url: details.url
                // }])

                setTripData({
                  locationInfo: {
                    name: data.description,
                    cordinates: details?.geometry.location,
                    photoRef: details.photos[0]?.photo_reference,
                    url: details?.url
                  }
                })
              }}
              query={{
                key: process.env.PUBLIC_GOOGLE_MAP_KEY,
                language: 'en',
              }}
          
              styles={{
                textInputContainer:{
                  // backgroundColor:Colors.WHITE,
                  borderBottomColor:Colors.GRAY,
                  borderBottomWidth:1,
                  borderRadius:15,
                  padding:5,
                },
                }}
             
          
          />
      
    </View>
  );
}