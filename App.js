import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
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

const Tab = createBottomTabNavigator();
const App = () => {
  const [font, setFont]=useState(false)

  useEffect(() => {
    Font.loadAsync({
      Monstserrat: require("./assets/fonts/aquire/Montserrat-Bold.ttf"),
      MonstserratLight: require("./assets/fonts/aquire/Montserrat-Light.ttf"),
      Aquire: require("./assets/fonts/aquire/AquireBold-8Ma60.otf"),
    }).then(() => setFont(true));
  }, []);


  return (
    <View style={styles.container}>
      <FontContext.Provider value={[font, setFont]}>
        <NavigationContainer >
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {
                display: "none",
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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Login" component={LockScreen} />
            <Tab.Screen name="Language" component={LanguagesScreen} />
            <Tab.Screen name="Password" component={PasswordAuth} />
          </Tab.Navigator>
        </NavigationContainer>
      </FontContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    width: "100%",
    height: "100%",
    backgroundColor: "#060606",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",

    display: "flex",
    backgroundColor: "#060606",
  },
});

export default App;
