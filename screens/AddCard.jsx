import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import Gradient from "../components/Gradient";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";
const AddCard = () => {
  return (
    <Gradient style={{alignItems:"center", justifyContent:"center", gap:30}}>
      <LinearGradient colors={['rgba(202, 107, 0, 1)', "rgba(255, 107, 1, 1)",'rgba(200, 109, 0, 1)']} style={styles.block}>
        <Text style={styles.title}>Card Details</Text>
        <View style={styles.input}>
          <Image
            source={require("../assets/images/credit_card.png")}
            style={{ position: "absolute", right: 10, top: 10 }}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Card number"
            placeholderTextColor={"#565656"}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Card holder’s name"
            placeholderTextColor={"#565656"}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", width:"100%" }}>
          <View style={{ ...styles.inputSecond, width: "60%" }}>
            <TextInput
              style={styles.inputText}
              placeholder="Valid thru (MM/YY)"
              placeholderTextColor={"#565656"}
            />
          </View>
          <View style={{ ...styles.inputSecond, width: "30%" }}>
            <TextInput
              style={{ ...styles.inputText, padding: 0, textAlign:"center", paddingRight:0, paddingLeft:0 }}
              placeholder="CVV"
              placeholderTextColor={"#565656"}
              maxLength={3}
            />
          </View>
        </View>
        </LinearGradient>
        <TouchableOpacity  style={styles.high}>
            <Text style={styles.highText}>Continue</Text>
        </TouchableOpacity>
    </Gradient>
  );
};
export default AddCard;
const styles = StyleSheet.create({
  block: {
    width: "90%",
    flexDirection:"column",
    alignItems:"center",
    padding:35,
    gap:17,
    borderRadius:10
  },
  title:{
    width:"100%",
    fontSize:20,
    fontFamily:"Monstserrat",
    color:"#fff"
  },
  highText:{
    color:"#fff",
    fontSize:18,
    fontFamily:"Monstserrat"
  },
  high:{
    backgroundColor:"#FF6B01",
    width:"80%",
    justifyContent:"center",
    alignItems:"center",
    height:50,
    borderRadius:30
  },
  input: {
    width: "100%",
    height: 47,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  inputText: {
    height: "100%",
    paddingHorizontal: 10,
    paddingRight: 38,
    fontFamily:"Monstserrat",
    fontSize:12
  },
  inputSecond: {
    height: 47,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
