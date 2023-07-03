import { StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../styles/styles";
import { TextInput } from "react-native";
import { useState } from "react";
const PhoneNumberInput = ({value, change, onfocus}) => {
  const handlePhoneNumberChange = (e)=>{
    change(e)
  }

  return (
    <TextInput
      textContentType="telephoneNumber"
      keyboardType="decimal-pad"
      placeholder="Enter your phone number"
      style={{ ...styles.TextInput, ...GlobalStyle.background, width: "70%" }}
      value={value}
      onChangeText={(e)=>handlePhoneNumberChange(e)}
      onPressIn={onfocus}
    />
  );
};
export default PhoneNumberInput;
const styles = StyleSheet.create({
  TextInput: {
    width: "70%",
    paddingHorizontal: 15,
    color: "#fff",
    fontFamily: "Monstserrat",
  },
});
