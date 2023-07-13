import React, { useContext, useEffect, useRef, useState } from "react";
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
import Navbar from "./components/Navbar";
import { NavigationContainer } from "@react-navigation/native";
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

// const Tab = createBottomTabNavigator();
// const App = () => {
//   const [font, setFont]=useState(false)

//   useEffect(() => {
//     Font.loadAsync({
//       Monstserrat: require("./assets/fonts/aquire/Montserrat-Bold.ttf"),
//       MonstserratLight: require("./assets/fonts/aquire/Montserrat-Light.ttf"),
//       MontserratMedium: require("./assets/fonts/aquire/Montserrat-Medium.ttf"),
//       MontserratRegular: require("./assets/fonts/aquire/MontserratRegular.ttf"),
//       Aquire: require("./assets/fonts/aquire/AquireBold-8Ma60.otf"),
//     }).then(() => setFont(true));
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FontContext.Provider value={[font, setFont]}>
//         <NavigationContainer >
//           <Tab.Navigator
//             screenOptions={({ route }) => ({
//               headerShown: false,
//               tabBarStyle: {
//                 display: "none",
//               },
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;

//                 if (route.name === "Home") {
//                   iconName = focused ? "ios-home" : "ios-home-outline";
//                 } else if (route.name === "Settings") {
//                   iconName = focused ? "ios-list" : "ios-list-outline";
//                 }

//                 // You can return any component that you like here!
//                 return <Ionicons name={iconName} size={size} color={color} />;
//               },
//               tabBarActiveTintColor: "tomato",
//               tabBarInactiveTintColor: "gray",
//             })}
//           >
//           <Stack.Screen name="Home" component={Main} />
//           <Stack.Screen name="More" component={MoreScreen} />
//           <Stack.Screen name="Login" component={LockScreen} />
//           <Stack.Screen name="Language" component={LanguagesScreen} />
//           <Stack.Screen name="Password" component={PasswordAuth} />
//           <Stack.Screen name="Home_Send" component={Send} />
//           <Stack.Screen name="Home_Send_Calculator"  component={SendMoneyCalculator} />
//           <Stack.Screen name="Home_Send_SelectCard"  component={SelectCard} />
//           <Stack.Screen name="Home_Send_NewRecepient"  component={Recepient} />
//           <Stack.Screen name="Home_Send_BankCard"  component={BankCard} />
//           <Stack.Screen name="Home_Send_DeliverCard"  component={DeliverCard} />
//           </Tab.Navigator>
//         </NavigationContainer>
//       </FontContext.Provider>
//     </View>
//   );
// };

// import * as React from "react";
// import { Button, View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./screens/DetailsScreen";
import AddCard from "./screens/AddCard";

const Stack = createNativeStackNavigator();

function App() {
  const [font, setFont] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Monstserrat: require("./assets/fonts/aquire/Montserrat-Bold.ttf"),
      MonstserratLight: require("./assets/fonts/aquire/Montserrat-Light.ttf"),
      MontserratMedium: require("./assets/fonts/aquire/Montserrat-Medium.ttf"),
      MontserratRegular: require("./assets/fonts/aquire/MontserratRegular.ttf"),
      Aquire: require("./assets/fonts/aquire/AquireBold-8Ma60.otf"),
    }).then(() => setFont(true));
  }, []);
  if (font) {
    return (
      <FontContext.Provider value={[font, setFont]}>
        <View style={{backgroundColor:"#060606", flex:1}}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Home" component={Main} />
              <Stack.Screen name="More" component={MoreScreen} />
              <Stack.Screen name="Login" component={LockScreen} />
              <Stack.Screen name="Language" component={LanguagesScreen} />
              <Stack.Screen name="Password" component={PasswordAuth} />
              <Stack.Screen name="Home_Send" component={Send} />
              <Stack.Screen
                name="Home_Send_Calculator"
                component={SendMoneyCalculator}
              />
              <Stack.Screen
                name="Home_Send_SelectCard"
                component={SelectCard}
              />
              <Stack.Screen
                name="Home_Send_NewRecepient"
                component={Recepient}
              />
              <Stack.Screen name="Home_Send_BankCard" component={BankCard} />
              <Stack.Screen name="Home_Send_DeliverCard" component={DeliverCard} />
              <Stack.Screen name="Home_AddCard" component={AddCard} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </FontContext.Provider>
    );
  }
}

export default App;
