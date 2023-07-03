import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import * as Font from "expo-font"
import { GlobalStyle } from "../styles/styles";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import CustomKeyboard from "../components/KeyboardNumber";
import Successfull from "../components/Successfull";
import { FontContext } from "../components/Context";

const PasswordAuth = () => {
  const [font, setFont] = useContext(FontContext);
  
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [KeyBoardShow, setKeyBoardShow] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, [success]);
  



  if (font) {
    return (
      <View style={styles.pasword}>
        {success ? <Successfull /> : null}
      
        <View style={{ width: "80%" }}>
          <Text
            style={{ ...GlobalStyle.title, marginBottom: 25, width: "100%" }}
          >
            Enter your Bear Payline password or log in with an SMS security
            code.
          </Text>

          <View style={styles.InputBLock}>
            <TextInput
              secureTextEntry={!showPassword}
              style={{ ...GlobalStyle.background, ...styles.input }}
              maxLength={4}
              value={password}
              onPressIn={() => setKeyBoardShow((prev) => !prev)}
            />
            <Pressable
              style={styles.pres}
              onPress={() => setShowPassword((prev) => !prev)}
            >
              <Image
                source={
                  showPassword
                    ? require("../assets/images/icons/eye-closed.png")
                    : require("../assets/images/icons/eye-open.png")
                }
              />
            </Pressable>
          </View>
          <Pressable
            style={{ ...GlobalStyle.btn, marginTop: 60, width: "100%" }}
            onPress={() =>{
              if(password){
                
                setSuccess(true)
              }
            
            }}
          >
            <Text style={GlobalStyle.btnText}>Continue</Text>
          </Pressable>
        </View>
        {KeyBoardShow ? (
          <View style={GlobalStyle.keyboard}>
            <TouchableOpacity
              style={GlobalStyle.key}
              onPress={() => setKeyBoardShow((prev) => (prev = false))}
            >
              <Image
                source={require("../assets/images/icons/ChevronDown.png")}
              />
            </TouchableOpacity>
            <CustomKeyboard
              onKeyPress={(e) => setPassword((prev) => (prev += e))}
              deleteLet={() => setPassword((prev) => prev.slice(0, -1))}
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
export default PasswordAuth;
const styles = StyleSheet.create({
  InputBLock: {
    backgroundColor: "#FFCF8B",
    padding: 9,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15,
  },
  pasword: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor:"#060606",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",

    color: "#fff",
    textAlign: "center",
    flexDirection: "row",
    fontSize: 20,
    fontVariant: "italic",
    lineHeight: 10,
    letterSpacing: 13,
    fontWeight: "900",
    paddingTop: 8,
    height: 37,
    borderColor: "yellow",
  },
  pres: {
    width: 40,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});
