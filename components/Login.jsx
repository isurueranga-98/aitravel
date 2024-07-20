import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image source={require('./../assets/images/adaptive-icon.png')}
        style={{
          height:600,
          width:'auto'
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily:'outfit-Bold',
            textAlign: 'center',
            marginTop:10
          }}
        >AI Travel Planner</Text>
        <Text
          style={{
            fontSize:15,
            fontFamily:'outfit',
            textAlign:'center',
            color:Colors.GRAY,
            marginTop: 20
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          metus nec nunc scelerisque ultrices. Nullam ac neque non ex
          sollicitudin varius. Nulla facilisi. 
        </Text>
          <TouchableOpacity onPress={()=>router.push('auth/sign-in')} style={styles.button}><Text
              style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit-Bold'
              }}
            >Login with Google</Text>
          </TouchableOpacity>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },

  button:{
    backgroundColor:Colors.PRIMARY,
    padding: 15,
    borderRadius: 99,
    marginTop: '20%'
  }
})
