import { Text, View } from "react-native";
import Login from "./../components/Login"
import {auth} from './../configs/FirebaseConfig';
import { Redirect } from "expo-router";

const user = auth.currentUser;

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {user?
        <Redirect href={'/mytrip'}/> : <Login/>
      }
      {/* <Login/> */}
    </View>
  );
}
