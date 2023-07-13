import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import Gradient from "../components/Gradient";
import { useRoute } from "@react-navigation/native";
import Box from "../components/Box";
import { TouchableOpacity } from "react-native";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { TextInput } from "react-native";
import CustomKeyboard from "../components/KeyboardNumber";

const { width, height } = Dimensions.get("screen");

const DeliverCard = ({ navigation }) => {
  const route = useRoute();
  const [enterCard, setEntercard] = useState(false);
  const [cardValue, setCardValue] = useState("");
  const [keyboardShow, setKeyboardShow] = useState(false);
  console.log(route.params.country);
  return (
    <Gradient
      style={{ justifyContent: "center", alignItem: "center", width: width }}
    >
      {enterCard ? (
        <Box
          style={{
            height: height * 0.6,
            width: width * 0.9,
            alignSelf: "center",
            justifyContent: "space-around",
            paddingHorizontal: 13,
          }}
        >
          <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Text style={styles.title}>
              Select how to deliver money to {route.params.country.name}
            </Text>
            <Text style={styles.popu}>Popular</Text>
          </View>
          <Box style={styles.box}>
            <View style={styles.bank}>
              <Image
                style={{ width: "10%" }}
                source={require("../assets/images/bankCardUp.png")}
              />
              <View style={styles.bankInfo}>
                <Text style={styles.bankInfoTitle}>To bank cards</Text>
                <Text style={styles.bankInfoSubtitle}>
                  Humo, Mastercard, Mir, Union Pay, Uzcard or Visa
                </Text>
              </View>
            </View>
            <View
              style={{ width: "100%", borderWidth: 1, borderColor: "#FF7B01" }}
            ></View>
            <View style={styles.cardBottom}>
              <View style={styles.property}>
                <Text style={styles.propertyTitle}>Limit:</Text>
                <Text style={styles.propertySubtitle}>14.999.000</Text>
              </View>
              <View style={styles.property}>
                <Text style={styles.propertyTitle}>Fee:</Text>
                <Text style={styles.propertySubtitle}>14.999.000</Text>
              </View>
              <View style={styles.property}>
                <Text style={styles.propertyTitle}>Should Arrive:</Text>
                <Text style={styles.propertySubtitle}>In a few minutes</Text>
              </View>
            </View>
          </Box>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => setEntercard(true)}
          >
            <Text style={styles.touchText}>Continue</Text>
          </TouchableOpacity>
        </Box>
      ) : (
        <Box
          style={{
            height: height * 0.6,
            width: width * 0.9,
            alignSelf: "center",
            justifyContent: "space-around",
            paddingHorizontal: 13,
          }}
        >
          <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Text style={styles.title}>
              Add the recepient’s card from {route.params.country.name}
            </Text>
          </View>
          <Box style={styles.box}>
            <View style={styles.bankTwo}>
              <Image
                style={{ width: "10%" }}
                source={require("../assets/images/bank.png")}
              />
            </View>
            <View
              style={{ width: "100%", borderWidth: 1, borderColor: "#FF7B01" }}
            ></View>
            <View style={styles.cardBottomTwo}>
              <TextInput
                style={styles.input}
                placeholder="Enter card number"
                placeholderTextColor={"#fff"}
                onPressIn={() => setKeyboardShow(true)}
                value={cardValue}
              />
            </View>
          </Box>

          <Text style={styles.popu}>
            Should be Humo, Mastercard, Mir, Union Pay, Uzcard or Visa
          </Text>
          <TouchableOpacity
            style={styles.touch}
            onPress={() =>
              navigation.navigate("Home_Send_Calculator", {
                params: {
                  select: route.params,
                },
                card:cardValue
              })
            }
          >
            <Text style={styles.touchText}>Continue</Text>
          </TouchableOpacity>
        </Box>
      )}
      {keyboardShow ? (
        <View style={styles.keyboard}>
          <Pressable
            onPress={() => setKeyboardShow(false)}
            style={{ marginTop: 10, marginLeft: 10 }}
          >
            <Image
              source={require("../assets/images/icons/fi-rr-angle-small-down.png")}
            />
          </Pressable>
          <CustomKeyboard
            onKeyPress={(e) => setCardValue((prev) => (prev += e))}
            deleteLet={() => setCardValue((prev) => prev.slice(0, -1))}
            style={{ paddingVertical: 0, padding: 0, height: "85%" }}
          />
        </View>
      ) : null}
      <Navbar />
    </Gradient>
  );
};
export default DeliverCard;
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#FF7B01",
    height: 40,
    width: "90%",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: "MontserratRegular",
    color: "#fff",
    alignSelf: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "MontserratMedium",
    width: "80%",
    marginBottom: 20,
    fontSize: 19,
  },
  popu: {
    color: "#fff",
    fontFamily: "MonstserratLight",
  },
  box: {
    width: "100%",
    height: 196,
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    flexDirection: "row",
    height: "50%",
  },
  cardBottom: {
    height: "50%",
    flexDirection: "column",
  },
  property: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  propertyTitle: {
    width: "40%",
    fontSize: 12,
    color: "#fff",
    fontFamily: "MontserratRegular",
  },
  propertySubtitle: {
    width: "45%",
    fontSize: 12,
    color: "#fff",
    fontFamily: "Monstserrat",
  },
  bank: {
    flexDirection: "row",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardBottomTwo: {
    height: "50%",
    flexDirection: "column",
    justifyContent: "center",
  },
  bankTwo: {
    width: "100%",
    flexDirection: "row",
    height: "50%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "5%",
  },
  bankInfo: {
    width: "73%",
    marginLeft: 13,
  },
  bankInfoTitle: {
    fontFamily: "MontserratMedium",
    color: "#fff",
  },
  bankInfoSubtitle: {
    fontSize: 10,
    width: "60%",
    fontFamily: "MonstserratLight",
    color: "#fff",
  },
  touch: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "rgba(255, 106, 0, 0.79)",
  },
  touchText: {
    color: "#fff",
    fontFamily: "Monstserrat",
    fontSize: 20,
  },

  keyboard: {
    position: "absolute",
    width: "100%",
    height: 350,
    backgroundColor: "#060606",
    bottom: 0,
    zIndex: 3,
    borderRadius: 5,
  },
});
