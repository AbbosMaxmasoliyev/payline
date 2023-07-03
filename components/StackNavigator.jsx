import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import BookingScreen from "../screens/BookingScreen";
import SavedScreen from "../screens/SavedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator  >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          
          options={{
              tabBarStyle: styles.tabbarStyle,

            tabBarLabel: "Home",
            headerShown: false,
            title:"",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarStyle: styles.tabbarStyle,
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="heart" size={24} color="black" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarStyle: styles.tabbarStyle,
            tabBarLabel: "Booking",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                
                  <Ionicons name="notifications-circle" size={24} color="black" />
              ) : (
                <Ionicons
                  name="notifications-circle-outline"
                  size={24}
                  color="black"
                  />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          
          component={ProfileScreen}
          options={{
            tabBarStyle: styles.tabbarStyle,
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Server"  component={BottomTabs}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
const styles = StyleSheet.create({
  tabbarStyle:{
    padding:5,
    borderColor:"red",
    borderStyle:"solid",
    borderWidth:1
  },
});
