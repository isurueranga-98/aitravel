import { View, Text,Button  } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from "./../../context/CreateTripContext"
import { useRouter} from 'expo-router'



// This is the correct code you need to use with your Google API key. I use below dummy code befor I have no Google API Key//

// export default function SearchPlace() {
//   const navigation = useNavigation();
//   const {tripData, setTripData} = useContext(CreateTripContext);
//   const router = useRouter();
//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: 'Search Place',
//     });
//   }, [navigation]);


//   useEffect(()=>{
//     console.log(tripData)
//   }),[tripData]

//   return (
//     <View  style={{
//       padding:25,
//       paddingTop:75,
//       backgroundColor:Colors.WHITE,
//       height:'100%'
//     }}>

    
//           <GooglePlacesAutocomplete
//               placeholder='Search'
//               fetchDetails={true}
//               onPress={(data, details = null) => {

//                 setTripData({
//                   locationInfo: {
//                     name: data.description,
//                     cordinates: details?.geometry.location,
//                     photoRef: details.photos[0]?.photo_reference,
//                     url: details?.url
//                   }
//                 })

//                 router.push('/create-trip/search-place')
//               }}
//               query={{
//                 key: process.env.PUBLIC_GOOGLE_MAP_KEY,
//                 language: 'en',              
//               }}
          
//               styles={{
//                 textInputContainer:{
//                   borderBottomColor:Colors.GRAY,
//                   borderBottomWidth:1,
//                   borderRadius:15,
//                   padding:5,
//                 },
//                 }}
//           />
//     </View>
//   );
// }


export default function SearchPlace() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search Place',
    });
  }, [navigation]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  const handleSelectSriLanka = () => {
    setTripData({
      locationInfo: {
        name: 'Sri Lanka',
        cordinates: { lat: 7.8731, lng: 80.7718 },
        photoRef: null,
        url: 'https://en.wikipedia.org/wiki/Sri_Lanka'
      }
    });
    router.push('/create-trip/select-traveler');
  };

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails={true}
        onPress={(data, details = null) => {
          setTripData({
            locationInfo: {
              name: data.description,
              cordinates: details?.geometry.location,
              photoRef: details.photos[0]?.photo_reference,
              url: details?.url
            }
          });
          router.push('/create-trip/search-place');
        }}
        query={{
          key: process.env.PUBLIC_GOOGLE_MAP_KEY || 'DUMMY_KEY', // Use a dummy key for testing
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            borderBottomColor: Colors.GRAY,
            borderBottomWidth: 1,
            borderRadius: 15,
            padding: 5,
          },
        }}
      />

      <Button title="Select Sri Lanka" onPress={handleSelectSriLanka} />
    </View>
  );
}