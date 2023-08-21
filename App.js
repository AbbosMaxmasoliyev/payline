import React, { useContext, useEffect, useRef, useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Button,
} from "react-native";

import LanguagesScreen from "./screens/Language";
import Login from "./screens/Login";
import MyForm from "./components/KeyboardNumber";
import PasswordAuth from "./screens/PasswordAuth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import Loading from "./screens/Loading";
import LockScreen from "./screens/LockScreen";
import * as Font from "expo-font";
import { FontContext } from "./components/Context";
import Main from "./screens/Main";
import MoreScreen from "./screens/MoreScreen";
import Send from "./screens/Send";
import SendMoneyCalculator from "./screens/SendMoneyCalculator";
import SelectCard from "./screens/SelectCard";
import Recepient from "./screens/Recepient";
import BankCard from "./screens/BankCard";
import DeliverCard from "./screens/DeliverCard";
import BookingScreen from "./screens/BookingScreen";
import AddCard from "./screens/AddCard"
import { Keyboard } from "react-native";
import DetailsScreen from "./screens/DetailsScreen";
import SendCheckCard from "./screens/SendCheckCard";
import TransactionHistory from "./components/TransactionHistoryItem";
import RequestScreen from "./screens/RequestScreen";
import RequestLoanAmount from "./screens/RequestLoanAmount";
import SelectCountry from "./components/SelectCountry";
import RequestCheckCard from "./screens/RequestCheck";
import InsertNumber from "./components/InsertNumber";
import Help from "./screens/Help";
import Currencies from "./components/Currencies";
import Chat from "./screens/Chat";
import LikeAnimation from "./screens/LikeAnimation";
import MessageSend from "./screens/Message";
import ChatApp from "./screens/ChatMessage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const App = () => {
  const [font, setFont] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      Monstserrat: require("./assets/fonts/aquire/Montserrat-Bold.ttf"),
      MonstserratLight: require("./assets/fonts/aquire/Montserrat-Light.ttf"),
      MontserratMedium: require("./assets/fonts/aquire/Montserrat-Medium.ttf"),
      MontserratRegular: require("./assets/fonts/aquire/MontserratRegular.ttf"),
      Aquire: require("./assets/fonts/aquire/AquireBold-8Ma60.otf"),
    }).then(() => setFont(true));



  }, []);

  return (
    <FontContext.Provider value={[font, setFont]}>
      <NavigationContainer  >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              display: "none",
              position: "absolute",

            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="More" component={MoreScreen} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Login" component={LockScreen} />
          <Stack.Screen name="Language" component={LanguagesScreen} />
          <Stack.Screen name="Password" component={PasswordAuth} />
          <Stack.Screen name="Home_Send" component={Send} />
          <Stack.Screen name="Home_Send_Calculator" component={SendMoneyCalculator} />
          <Stack.Screen name="Home_Send_SelectCard" component={SelectCard} />
          <Stack.Screen name="Home_Send_NewRecepient" component={Recepient} />
          <Stack.Screen name="Home_Send_BankCard" component={BankCard} />
          <Stack.Screen name="Home_Send_DeliverCard" component={DeliverCard} />
          <Stack.Screen name="Home_AddCard" component={AddCard} />
          <Stack.Screen name="Home_Send_Checkcard" component={SendCheckCard} />
          <Stack.Screen name="Home_TransactionHistory" component={TransactionHistory} />
          <Stack.Screen name="Home_Request" component={RequestScreen} />
          <Stack.Screen name="Home_Request_SetLoanAmount" component={RequestLoanAmount} />
          <Stack.Screen name="Home_Request_Check" component={RequestCheckCard} />
          <Stack.Screen name="Home_Request_NewContact" component={InsertNumber} />
          <Stack.Screen name="More_Currency" component={Currencies} />
          <Stack.Screen name="Help_Chat" component={Chat} />
          <Stack.Screen name="Help_Like" component={LikeAnimation} />
          <Stack.Screen name="Help_MessageSend" component={MessageSend} />
          <Stack.Screen name="Help_MessageFake" component={ChatApp} />
        </Tab.Navigator>
      </NavigationContainer>
    </FontContext.Provider>
  );
};

// import * as React from "react";
// import { Button, View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import DetailsScreen from "./screens/DetailsScreen";
// import AddCard from "./screens/AddCard";

// const Stack = createNativeStackNavigator();

// function App() {
//   const [font, setFont] = useState(false);

//   useEffect(() => {
//     Font.loadAsync({
//       Monstserrat: require("./assets/fonts/aquire/Montserrat-Bold.ttf"),
//       MonstserratLight: require("./assets/fonts/aquire/Montserrat-Light.ttf"),
//       MontserratMedium: require("./assets/fonts/aquire/Montserrat-Medium.ttf"),
//       MontserratRegular: require("./assets/fonts/aquire/MontserratRegular.ttf"),
//       Aquire: require("./assets/fonts/aquire/AquireBold-8Ma60.otf"),
//     }).then(() => setFont(true));
//   }, []);
//   if (font) {
//     return (
//       <FontContext.Provider value={[font, setFont]}>
//         <View style={{backgroundColor:"#060606", flex:1}}>
//           <NavigationContainer>
//             <Stack.Navigator
//               initialRouteName="Home"
//               screenOptions={{ headerShown: false }}
//             >
//               <Stack.Screen name="Home" component={Main} />
//               <Stack.Screen name="More" component={MoreScreen} />
//               <Stack.Screen name="Login" component={LockScreen} />
//               <Stack.Screen name="Language" component={LanguagesScreen} />
//               <Stack.Screen name="Password" component={PasswordAuth} />
//               <Stack.Screen name="Home_Send" component={Send} />
//               <Stack.Screen
//                 name="Home_Send_Calculator"
//                 component={SendMoneyCalculator}
//               />
//               <Stack.Screen
//                 name="Home_Send_SelectCard"
//                 component={SelectCard}
//               />
//               <Stack.Screen
//                 name="Home_Send_NewRecepient"
//                 component={Recepient}
//               />
//               <Stack.Screen name="Home_Send_BankCard" component={BankCard} />
//               <Stack.Screen name="Home_Send_DeliverCard" component={DeliverCard} />
//               <Stack.Screen name="Home_AddCard" component={AddCard} />
//             </Stack.Navigator>
//           </NavigationContainer>
//         </View>
//       </FontContext.Provider>
//     );
//   }
// }

export default App;
