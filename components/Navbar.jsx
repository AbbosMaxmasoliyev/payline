import { useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontContext } from "./Context";

const GoBack = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require("../assets/images/icons/arrow-left.png")} />
    </TouchableOpacity>
  );
};

const Navbar = ({navigation}) => {
  const [font, setFont] = useContext(FontContext);
  const navigate = useNavigation()
  const routeName = useRoute();


  if (font) {
    return (
      <View style={styles.navbar}>
        <View style={styles.view}>
          <Pressable style={styles.pres} onPress={()=> navigate.navigate({name:"Home"})}>
            <Image
              source={
                routeName.name.includes("Home")
                  ? require("../assets/images/icons/grid-4.png")
                  : require("../assets/images/icons/gridDark-4.png")
              }
              style={{ width: 33, height: 33 }}
            />
            <Text
              style={
                routeName.name === "Home"
                  ? { ...styles.text, color: "#fff" }
                  : styles.text
              }
            >
              Home
            </Text>
          </Pressable>

          <Pressable style={styles.pres}>
            <Image
              source={
                routeName.name == "Limits"
                  ? require("../assets/images/icons/limitsHover.png")
                  : require("../assets/images/icons/limits.png")
              }
              style={{ width: 33, height: 33 }}
            />
            <Text style={styles.text}>Limits</Text>
          </Pressable>

          <Pressable
            style={
              routeName.name == "Help"
                ? { backgroundColor: "#171513", ...styles.pres }
                : { ...styles.pres }
            }
          >
            <Image
              source={
                routeName.name === "Help"
                  ? require("../assets/images/icons/help.png")
                  : require("../assets/images/icons/helpDark.png")
              }
              style={{ width: 33, height: 33 }}
            />
            <Text
              style={
                routeName.name === "Help"
                  ? { ...styles.text, color: "#fff" }
                  : styles.text
              }
            >
              Help
            </Text>
          </Pressable>
          <Pressable style={styles.pres}>
            <Image
              source={
                routeName.name === "Notices"
                  ? require("../assets/images/icons/belldark.png")
                  : require("../assets/images/icons/bell.png")
              }
              style={{ width: 33, height: 33 }}
            />
            <Text
              style={
                routeName.name === "Notices"
                  ? { ...styles.text, color: "#fff" }
                  : styles.text
              }
            >
              Notices
            </Text>
          </Pressable>
          <Pressable style={styles.pres} onPress={()=> navigate.navigate({name:"More"})}>
          <Image
            source={
              routeName.name === "More"
                ? require("../assets/images/icons/menu-hamburger-dark.png")
                : require("../assets/images/icons/menu-hamburger.png")
            }
            style={{ width: 33, height: 33 }}
          />
          <Text
            style={
              routeName.name === "More"
                ? { ...styles.text, color: "#fff" }
                : styles.text
            }
          >
            Notices
          </Text>
        </Pressable>
        </View>
      </View>
    );
  }
};
export { Navbar, GoBack };
const styles = StyleSheet.create({
  navbar: {
    width: "100%",

    height: 50,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#060606",
  },
  view: {
    width: "95%",
    borderRadius: 30,

    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#282828",
    position: "absolute",
    top: -50,
  },
  pres: {
    width: "15%",
    height: "80%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 10,
    color: "#FF6B01",
    fontFamily: "Monstserrat",
  },
});
