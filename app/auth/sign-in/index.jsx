import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter} from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
  return (
    <View style={{
      padding:20,
      paddingTop:50,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <TouchableOpacity onPress={()=> router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-Bold',
        fontSize:30,
        marginTop:30
      }}>Let's Sign You In</Text>


      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20
      }}>Welcome Back</Text>


      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20
      }}>Yoy have been missed</Text>

      <View style={{marginTop:50}}>
        <Text style={{
          fontFamily:'outfit',
          fontSize:15,
          color:Colors.GRAY,
          marginTop:20
        }}>Email</Text>
        <TextInput 
          style={styles.input}
        />
      </View>


      <View style={{marginTop:20}}>
        <Text style={{
          fontFamily:'outfit',
          fontSize:15,
          color:Colors.GRAY,
          marginTop:20
        }}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <View>

      {/* I use TouchableOpacity but tutorial use Viwe */}
      <TouchableOpacity onPress={()=>router.push('')} style={styles.button}><Text
              style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit-Bold'
              }}
            >Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>router.push('auth/Sign-up')} style={styles.button2}><Text
              style={{
                color:Colors.GRAY,
                textAlign:'center',
                fontFamily:'outfit-Bold'
              }}
            >Create Account</Text>
        </TouchableOpacity>
 
        


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderBottomColor:Colors.GRAY,
    borderBottomWidth:1,
    padding:10,
    fontSize:15
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding: 15,
    borderRadius: 99,
    marginTop: '20%'
  },
  button2:{
    
    padding: 15,
    borderRadius: 99,
    marginTop:10
  }
})