import * as Font from "expo-font"
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontContext } from "./Context";

const Successfull = () => {
  const [font, setFont] = useContext(FontContext)

  if (font) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 9,
          backgroundColor: "#060606",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          source={require("../assets/images/icons/297803351047Success.gif")}
          style={{ width: "50%", height: "30%" }}
        />
        <Text style={{ color: "#fff", fontFamily:"Monstserrat" }}>Login Successfully</Text>
      </View>
    );
  }
};
export default Successfull;
const styles = StyleSheet.create({});
