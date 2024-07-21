// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useNavigation, useRouter } from 'expo-router';
// import { Colors } from '@/constants/Colors';
// import { SelectTravelerList } from './../../constants/Option';
// import OptionCard from './../../components/CreateTrip/OptionCard';
// import { CreateTripContext } from "./../../context/CreateTripContext";

// export default function SelectTraveler() {
//   const navigation = useNavigation();
//   const [selectTraveler, setSelectTraveler] = useState();
//   const { tripData, setTripData } = useContext(CreateTripContext);
//   const router = useRouter();
  
//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: '',
//     });
//   }, [navigation]);

//   useEffect(() => {
//     setTripData({
//       ...tripData,
//       traveler: selectTraveler
//     });
//   }, [selectTraveler]);

//   return (
//     <View style={{
//       padding: 25,
//       paddingTop: 75,
//       backgroundColor: Colors.WHITE,
//       height: '100%'
//     }}>
//       <Text style={{
//         fontSize: 25,
//         fontFamily: 'outfit-Bold',
//         marginTop: 20
//       }}>Who is Travelling</Text>

//       <View style={{
//         marginTop: 20
//       }}>
//         <Text style={{
//           fontFamily: 'outfit',
//           fontSize: 20,
//           marginTop: 20
//         }}>Choose Your Travelers</Text>

//         <FlatList
//           data={SelectTravelerList}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity 
//               onPress={() => setSelectTraveler(item)}
//               style={{
//                 marginVertical: 10
//               }}>
//               <OptionCard option={item} selectedTraveler={selectTraveler} />
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>

//       <TouchableOpacity onPress={()=>router.push('/create-trip/select-dates')} style={{
//         backgroundColor: Colors.PRIMARY,
//         padding: 10,
//         borderRadius: 15,
//         marginTop: 20
//       }}>
//         {/* <Link href={'/create-trip/select-dates'}> */}
//           <Text style={{
//             fontSize: 20,
//             fontFamily: 'outfit-Medium',
//             color: Colors.WHITE,
//             textAlign: 'center'
//           }}>Next</Text>
//         {/* </Link> */}
//       </TouchableOpacity>
//     </View>
//   );
// }


import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors'
import {SelectTravelerList} from './../../constants/Option'
import OptionCard from './../../components/CreateTrip/OptionCard'
import {CreateTripContext} from "./../../context/CreateTripContext"
import { Link } from '@react-navigation/native';


export default function SelectTraveler() {

  const navigation = useNavigation();
  
  const [selectTraveler,setSelectTraveler] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);

  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

  useEffect(()=>{
    setTripData({
      ...tripData,
      traveler: selectTraveler
    });
  },[selectTraveler])

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
            <TouchableOpacity 
              onPress={()=> setSelectTraveler(item)}
            style={{
              marginVertical:10
            }}>
              <OptionCard option={item} selectedTravaler = {selectTraveler}/>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity onPress={()=>router.push('/create-trip/select-dates')} style={{
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
  )
}