import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter} from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../../configs/FirebaseConfig'
export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])


  const OnCreateAccount= () =>{

    if(!email && !password && !fullName){
      ToastAndroid.show('Please Enter all detatils', ToastAndroid.LONG)
      return;
    }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
    // ..
  });
  }








  return (

    








    
    <View
      style={{
        padding:20,
        paddingTop:50,
        backgroundColor:Colors.WHITE,
        height:'100%'
      }}
    >

      <TouchableOpacity onPress={()=> router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily:'outfit-Bold',
          fontSize:30,
          marginTop:30,
        }}
      >Create New Account</Text>


      <View style={{marginTop:50}}>
        <Text style={{
          fontFamily:'outfit',
          fontSize:15,
          color:Colors.GRAY,
          marginTop:20
        }}>Full Name</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(vlue)=>setFullName(vlue)}
        />
      </View>

      <View style={{marginTop:20}}>
        <Text style={{
          fontFamily:'outfit',
          fontSize:15,
          color:Colors.GRAY,
          marginTop:20
        }}>Email</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(vlue)=>setEmail(vlue)}
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
          onChangeText={(vlue)=>setPassword(vlue)}
        />
      </View>




      <View>

      {/* I use TouchableOpacity but tutorial use Viwe */}
      <TouchableOpacity onPress={OnCreateAccount} style={styles.button}><Text
              style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit-Bold'
              }}
            >Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>router.push('auth/sign-in')} style={styles.button2}><Text
              style={{
                color:Colors.GRAY,
                textAlign:'center',
                fontFamily:'outfit-Bold'
              }}
            >Sign In</Text>
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