import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import Languages from "../components/Languages";
import * as Font from "expo-font";
import { GlobalStyle } from "../styles/styles";
import {FontContext} from "../components/Context"

const LanguagesScreen = ({navigation}) => {
  const [font, setFont] = useContext(FontContext)


  const [langShow, setLangShow] = useState(false);
  const [langId, setLangId] = useState();
  const inputRef = useRef(null);
  const handleFocus = () => {
    setLangShow(true);
  };

  const handleId = (id) => {
    setLangId(id);
  };



  if (font) {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Image
            source={require("../assets/images/icons/fi-rr-search.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/images/icons/fi-rr-angle-down.png")}
            style={styles.chevron}
          />
          <TextInput
            ref={inputRef}
            onPressIn={handleFocus}
            placeholderTextColor={"#FF6A00"}
            placeholder="Select  language"
            style={styles.input}
            value={langId}
            onChangeText={(text)=> setLangId(text)}
          />

          <Pressable style={{ ...GlobalStyle.btn, marginTop: 55 }} onPress={()=> navigation.navigate("Login")}>
            <Text style={GlobalStyle.btnText}>Continue</Text>
          </Pressable>

          </View>
          {langShow ? (
            <View style={{ position: "absolute", width: "100%", bottom: -20 }}>
              <Languages press={() => setLangShow(false)} selectLang={(item)=> {
                setLangId(item.name)
              }} />
            </View>
          ) : null}
      </View>
    );
  } else {
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>;
  }
};

const styles = StyleSheet.create({
  block: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#060606",
  },

  chevron: {
    width: 20,
    height: 20,
    position: "absolute",
    zIndex: 2,
    top: 18,
    right: 42,
  },
  image: {
    width: 24,
    height: 24,
    position: "absolute",
    zIndex: 2,
    top: 15,
    left: 42,
  },
  input: {
    width: "90%",
    height: 55,
    paddingHorizontal: 55,
    borderRadius: 35,
    backgroundColor: "rgba(138, 136, 136, 0.45)",
    color: "#FF6A00",
    textAlign: "center",
    fontFamily: "Monstserrat",
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default LanguagesScreen;
