import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors'

{/* <Ionicons name="location" size={24} color="black" /> */}
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false
    }}>
      <Tabs.Screen name='mytrip'
        options={{
          tabBarLabel: 'My Trip',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({color}) => <Ionicons name="location" size={24} color={color} />
        }}
      />
      <Tabs.Screen name='discover'
        options={{
          tabBarLabel: 'Discover',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({color}) => <Ionicons name="globe" size={24} color={color} />
        }}
      />
      <Tabs.Screen name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({color}) => <Ionicons name="people-circle" size={24} color={color} />
        }}
      />
    </Tabs>
  )
}