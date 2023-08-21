import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { Navbar } from "../components/Navbar";
import Box from "../components/Box";
import Gradient from "../components/Gradient";
import { useNavigation } from "@react-navigation/native";
import { useReducer } from "react";
import reducer from "../components/Reducers";

const MoreScreen = () => {
  const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <Box style={styles.internal}>
        <Text style={styles.title}>Settings & Info</Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn}>
            <Image source={require("../assets/images/icons/user-01.png")} />
            <Text style={styles.text}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home_Send_SelectCard")}>
            <Image source={require("../assets/images/icons/card.png")} />
            <Text style={styles.text}>My Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={require("../assets/images/icons/security.png")} />
            <Text style={styles.text}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("More_Currency")}>
            <Image source={require("../assets/images/icons/currency.png")} />
            <Text style={styles.text}>Currency</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={require("../assets/images/icons/languages.png")} />
            <Text style={styles.text}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={require("../assets/images/icons/info-circle.png")} />
            <Text style={styles.text}>About Us</Text>
          </TouchableOpacity>
        </View>
      </Box>
      <Navbar />
    </View>
  );
};
export default MoreScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#060606",
    position: "relative",
  },
  internal: {
    width: "90%",
    height: "70%",
  },
  btns: {
    flexDirection: "column",
    height: "85%",
    justifyContent: "space-between",
    position: "relative",
  },
  title: {
    color: "#fff",
    fontFamily: "MontserratMedium",
    marginVertical: 20,
    fontSize: 20,
    marginHorizontal: 19,
  },
  btn: {
    borderColor: "#75430D",
    borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 19,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 18,
  },
  text: {
    fontFamily: "MonstserratLight",
    color: "#fff",
    fontSize: 20,
  },
});
