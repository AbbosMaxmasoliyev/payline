import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from "react-native";
import Lottie from "lottie-react-native";
import * as Font from "expo-font";
import { FontContext } from "../components/Context";
const HomeScreen = ({ navigation }) => {
  
  const [timesPressed, setTimesPressed] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const translateAnim = useRef(new Animated.Value(-15)).current; // Initial value for opacity: 0
  const [display, setDisplay] = useState(false) // Initial value for opacity: 0

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Language");
    }, 5000);
  }, []);

  const [font, setFont] = useContext(FontContext)

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  
  useEffect(() => {
    Animated.timing(translateAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [translateAnim]);


  useEffect(() => {
      setInterval(()=>{
        setDisplay(true)
      },1500)
  }, []);



  if (font) {
    return (
      <View style={styles.container}>
        <Animated.View // Special animatable View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#060606",
            justifyContent:"center",
            opacity:fadeAnim,
            alignItems:"center",
            transform:[{
              translateY:translateAnim
            }]
             // Bind opacity to animated value
          }}
          >
          
          <Text style={{ fontFamily: "Aquire", color: "#FFB332", textAlign:"center", fontSize:35 }}>
            BEAR PAYLINE
          </Text>
          {
            display?
            <Image source={require("../assets/images/loading.gif")} style={{width:100, height:50, position:"absolute", top:50}}/>
            :null
          }
        </Animated.View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#060606",
    position:"relative"
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
  },
  wrapperCustom: {
    width: 83,
    height: 53,
    borderRadius: 8,
    padding: 6,
    borderColor: "#DA630E",
    borderStyle: "solid",
    borderWidth: 2,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});

export default HomeScreen;
