import React, { useContext, useEffect, useState } from "react";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { GlobalStyle } from "../styles/styles";
import PhoneNumberInput from "../components/PhoneNumberInput";
import CustomKeyboard from "../components/KeyboardNumber";
import { useRoute } from "@react-navigation/native";
import { GoBack, Navbar } from "../components/Navbar";
import { FontContext } from "../components/Context";

const Login = ({ navigation }) => {
  const [font, setFont] = useContext(FontContext);
  const [hover, setHover] = useState();
  const [keyBoardShow, setkeyBoardShow] = useState();
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  

  useEffect(() => {
    setFormattedPhoneNumber((prev) => (prev = formatPhoneNumber(number)));
  }, [number]);

  const handlePhoneNumberChange = (son) => {
    setNumber((prev) => prev + son);
  };

  const formatPhoneNumber = (number) => {
    const cleanedNumber = number.replace(/[^\d]/g, "");
    const areaCode = cleanedNumber.slice(0, 2);
    const firstPart = cleanedNumber.slice(2, 5);
    const secondPart = cleanedNumber.slice(5, 7);
    const thirdPart = cleanedNumber.slice(7, 12);
    if (cleanedNumber.length == 0) {
      return ``;
    } else if (cleanedNumber.length <= 2) {
      return `(${areaCode}`;
    } else if (cleanedNumber.length <= 5) {
      return `(${areaCode}) ${firstPart}`;
    } else if (cleanedNumber.length <= 7) {
      return `(${areaCode}) ${firstPart}${secondPart}`;
    } else if (cleanedNumber.length < 12) {
      return `(${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
    }
  };

  var countryPhoneData = [
    {
      passcode: "+998",
      image: require("../assets/images/icons/circle/Circleuzbekistan.png"),
    },
    {
      passcode: "+371",
      image: require("../assets/images/icons/circle/latviya.png"),
    },
    {
      passcode: "+7",
      image: require("../assets/images/icons/circle/kazakh.png"),
    },
    {
      passcode: "+370",
      image: require("../assets/images/icons/circle/lutaniya.png"),
    },
  ];

 
  const [data, setData] = useState(countryPhoneData[0]);

  if (font) {
    return (
      <View style={styles.loginScreen}>
        <View style={{ position: "absolute", top: "10%", left:"8%" }}>
          <GoBack />
        </View>
        <Text style={{ ...GlobalStyle.title, marginBottom: 25 }}>
          Fill out to access or register for Bear Payline
        </Text>
        <View style={GlobalStyle.inputBlock}>
          <View style={{ ...styles.phonePasscode, ...GlobalStyle.background }}>
            <Image
              source={
                data
                  ? data.image
                  : require("../assets/images/icons/circle/current.png")
              }
              style={styles.imagePassCode}
            />
            <TextInput
              style={{ ...styles.phonePasscodeNumber, width: "50%" }}
              onChangeText={(code) => {
                setData(
                  countryPhoneData.filter((item) => {
                    if (item.passcode === code) {
                      return item;
                    }
                  })[0]
                );
              }}
              maxLength={4}
              value={data ? data.passcode : null}
            />
            {show ? (
              <ScrollView style={styles.ScrollView}>
                {countryPhoneData.map((item, index) => (
                  <Pressable
                    style={
                      hover === item.passcode
                        ? {
                            ...styles.phonePasscode,
                            ...styles.selectPasscode,
                            backgroundColor: "#FFB332bc",
                          }
                        : { ...styles.phonePasscode, ...styles.selectPasscode }
                    }
                    key={index}
                    onPress={() => {
                      setData(item);
                      setHover(item.passcode);
                      setTimeout(() => {
                        setShow(false);
                        setHover(false);
                      }, 100);
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{ ...styles.imagePassCode, width: "20%" }}
                    />
                    <Text
                      style={
                        hover === item.passcode
                          ? {
                              ...styles.phonePasscodeNumber,
                              width: "60%",
                              textAlign: "center",
                              color: "#fff",
                            }
                          : {
                              ...styles.phonePasscodeNumber,
                              width: "60%",
                              textAlign: "center",
                            }
                      }
                    >
                      {item.passcode}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            ) : null}
            <Pressable onPress={() => setShow(!show)}>
              <Image
                source={require("../assets/images/icons/ChevronDown.png")}
              />
            </Pressable>
          </View>
          <PhoneNumberInput
            value={formattedPhoneNumber}
            change={(e) => setNumber(e)}
            onfocus={() => setkeyBoardShow((prev) => !prev)}
          />
        </View>
        <Navbar />

        <Pressable
          style={{ ...GlobalStyle.btn, marginTop: 55 }}
          onPress={() => navigation.navigate("Password")}
        >
          <Text style={GlobalStyle.btnText}>Continue</Text>
        </Pressable>
        {keyBoardShow ? (
          <View style={GlobalStyle.keyboard}>
            <TouchableOpacity
              style={GlobalStyle.key}
              onPress={() => setkeyBoardShow((prev) => (prev = false))}
            >
              <Image
                source={require("../assets/images/icons/fi-rr-angle-small-down.png")}
              />
            </TouchableOpacity>
            <CustomKeyboard
              onKeyPress={(e) => handlePhoneNumberChange(e)}
              deleteLet={() => setNumber((prev) => prev.slice(0, -1))}
            />
          </View>
        ) : null}
      </View>
    );
  } else {
    <View style={styles.loginScreen}>
      <Text style={{ color: "red" }}>Loading....</Text>
    </View>;
  }
};

let styles = StyleSheet.create({
  imagePassCode: {
    width: 18,
    height: 18,
  },
  ScrollView: {
    position: "absolute",
    top: 40,
    left: -4,
    width: 100,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFCF8B",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: "hidden",
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  selectPasscode: {
    width: "100%",
    margin: 2,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
  },

  loginScreen: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#060606",
  },

  phonePasscode: {
    width: "25%",
    height: 38,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },

  phonePasscodeNumber: {
    fontFamily: "Monstserrat",
    color: "#fff",
    fontSize: 14,
  },
});

export default Login;
