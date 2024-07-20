import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {CreateTripContext} from "../context/CreateTripContext"
import { useState } from "react";

export default function RootLayout() {

  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Bold':require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-Medium':require('./../assets/fonts/Outfit-Medium.ttf')
  });
  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{tripData,setTripData}}>
      <Stack screenOptions={{
        headerShown:false
      }}>
        {/* <Stack.Screen name="index" options={{
          headerShown:false
        }}/> */}
          <Stack.Screen name="(tabs)"/>
      </Stack>
    </CreateTripContext.Provider>


  );
}
