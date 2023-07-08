import { StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../styles/styles";
import { Image } from "react-native";
const Gradient = ({ children, style }) => {
  return (
    <View style={GlobalStyle.gradient}>
      <View style={GlobalStyle.left}>
        <Image
          source={require("../assets/images/shadow.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={GlobalStyle.right}>
        <Image
          source={require("../assets/images/shadow.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      {children}
    </View>
  );
};
export default Gradient;
const styles = StyleSheet.create({});
