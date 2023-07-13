import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Gradient from "../components/Gradient";
import Box from "../components/Box";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get("screen");
const BankCard = () => {
  return (
    <View>
      <Gradient style={{ justifyContent: "center", alignItems: "center" }}>
        <Box style={styles.box}>
          <Text style={styles.title}>Add recepient’s card </Text>
          <View style={styles.card}>
            <Image source={require("../assets/images/bank.png")} />
            <TextInput
              style={styles.input}
              placeholder="Enter card number"
              placeholderTextColor={"#fff"}
            />
          </View>
          <TextInput
            style={{
              ...styles.input,
              width: "90%",
              height: 53,
              borderRadius: 20,
              backgroundColor: "rgba(138, 136, 136, 0.19)",
              marginTop: 34,
            }}
            placeholder="First name"
            placeholderTextColor={"#fff"}
          />
          <Text style={styles.subtitle}>In English characters</Text>

          <TextInput
            style={{
              ...styles.input,
              width: "90%",
              height: 53,
              borderRadius: 20,
              backgroundColor: "rgba(138, 136, 136, 0.19)",
              marginTop: 34,
            }}
            placeholder="Last name"
            placeholderTextColor={"#fff"}
          />
          <Text style={styles.subtitle}>In English characters</Text>

          <TouchableOpacity style={{height:53, backgroundColor:"rgba(255, 106, 0, 0.79)", width:"90%", marginVertical:35, justifyContent:"center", alignItems:"center", borderRadius:20}}>
            <Text style={{color:"#fff", fontFamily:"Monstserrat", fontSize:18}}>Continue</Text>
          </TouchableOpacity>
        </Box>
      </Gradient>
    </View>
  );
};
export default BankCard;
const styles = StyleSheet.create({
  box: {
    width: width * 0.9,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF7B01",
    height: 40,
    width: "100%",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: "MontserratRegular",
    color: "#fff",
  },
  title: {
    textAlign: "left",
    width: width * 0.8,
    marginBottom: 23,
    marginTop: 39,
    fontFamily: "Monstserrat",
    fontSize: 19,
    color: "#fff",
  },
  subtitle: {
    fontFamily: "MontserratRegular",
    width: "85%",
    color: "#fff",
    marginTop: 8,
  },
  card: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#FF7B01",
    paddingVertical: 39,
    paddingHorizontal: 21,
    flexDirection: "column",
    gap: 39,
    justifyContent: "center",
    borderRadius: 20,
  },
});
