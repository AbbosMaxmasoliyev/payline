import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gradient from "../components/Gradient";
import { Navbar } from "../components/Navbar";
import CardSelection from "../components/CardSelection";
import Box from "../components/Box";
import CustomKeyboard from "../components/KeyboardNumber";
import { Image } from "react-native";
import { useEffect, useState } from "react";
import NumberKey from "../components/NumberKey";

const SelectCard = ({navigation}) => {
  let { height, width } = Dimensions.get("window");
  // const navigation = useNavigation();
  const [cardSelect, setCardSelect] = useState("");
  const [cvvValue, setCvvValue] = useState("");
  const [cvvFalse, setCvvfalse] = useState(false);
  const [keyboard, setKeyboardShow] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [completed, setCompleted] = useState(false);
  const next = () => {
    if (cvvValue == 122) {
      setSending(true);
      setTimeout(() => {
        setSuccess(false);
        setSending(false);
        setCvvfalse(false);
        setKeyboardShow(false);
        setCvvValue("");
        setCompleted("send");
      }, 3000);

      setTimeout(() => {
        setCompleted(false);
      }, 5000);
    } else {
      setCvvfalse(true);
    }
  };
  return (
    <Gradient>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Box style={{ width: "90%" }}>
          <CardSelection
           navigation={navigation}
            selectcard={(e) => {
              setCardSelect(e);
              setKeyboardShow(true);
            }}
          />
        </Box>
      </View>
      {keyboard ? (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "70%",
            zIndex: 2,
            bottom: 0,
            backgroundColor: "#060606",
          }}
        >
          <TouchableOpacity onPress={() => setKeyboardShow(false)}>
            <Image
              source={require("../assets/images/fi-rr-angle-small-down.png")}
            />
          </TouchableOpacity>
          <Text style={styles.cvvTitle}>
            Enter the CVV for Santander
            {cardSelect.slice(cardSelect.length - 4, cardSelect.length)}{" "}
          </Text>
          <TextInput
            placeholder="Enter CVV"
            placeholderTextColor={"#fff"}
            maxLength={3}
            value={cvvValue}
            style={{
              backgroundColor: "#fff",
              height: 42,
              width: "90%",
              alignSelf: "center",
              borderRadius: 10,
              textAlign: "center",
              fontFamily: "Monstserrat",
            }}
          />
          {cvvFalse ? (
            <Text style={{ color: "#FF6A00", ...styles.cvvFalse }}>
              The CVV code is incorrect
            </Text>
          ) : (
            <Text style={{ color: "#FFC700", ...styles.cvvFalse }}>
              3 digits on the back of your card
            </Text>
          )}
          <CustomKeyboard
            onKeyPress={(e) => setCvvValue((prev) => prev + e)}
            style={{
              marginTop: 0,
              height: "50%",
            }}
            deleteLet={() => setCvvValue((prev) => prev.slice(0, -1))}
          />
          <TouchableOpacity style={styles.touch} onPress={() => next()}>
            <Text style={styles.touchtext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <Navbar />
      {sending ? (
        <View
          style={{
            position: "absolute",
            width: width,
            backgroundColor: "#060606",
            top: 0,
            zIndex: 4,
            flex: 1,
            height: height,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/icons/transferMoneySending.gif")}
            style={{ width: 250, height: 250 }}
          />
          <Text
            style={{
              color: "#FF6A00",
              fontFamily: "MontserratMedium",
              fontSize: 20,
            }}
          >
            Sending a transfer request
          </Text>
        </View>
      ) : null}
      {success ? (
        <View
          style={{
            position: "absolute",
            width: width,
            backgroundColor: "#060606",
            top: 0,
            zIndex: 4,
            flex: 1,
            height: height,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/icons/transferMoneySending.gif")}
            style={{ width: 250, height: 250 }}
          />
          <Text
            style={{
              color: "#FF6A00",
              fontFamily: "MontserratMedium",
              fontSize: 20,
            }}
          >
            Sending a transfer request
          </Text>
        </View>
      ) : null}
      {completed == "bad" ? (
        <View
          style={{
            position: "absolute",
            width: width,
            backgroundColor: "#060606",
            top: 0,
            zIndex: 4,
            flex: 1,
            height: height,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#FF6A00",
              fontFamily: "MontserratMedium",
              fontSize: 20,
            }}
          >
            Transfer failed
          </Text>
        </View>
      ) : null}
      {completed == "send" ? (
        <View
          style={{
            position: "absolute",
            width: width,
            backgroundColor: "#060606",
            top: 0,
            zIndex: 4,
            flex: 1,
            height: height,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#FF6A00",
              fontFamily: "MontserratMedium",
              fontSize: 20,
            }}
          >
            Transfer successfully
          </Text>
        </View>
      ) : null}
    </Gradient>
  );
};
export default SelectCard;
const styles = StyleSheet.create({
  cvvTitle: {
    color: "#fff",
    marginVertical: 13,
    textAlign: "center",
    fontFamily: "Monstserrat",
  },
  cvvTrue: {
    color: "#FF6A00",
    marginVertical: 13,
    textAlign: "center",
    fontFamily: "MonstserratLight",
  },
  touch: {
    width: "90%",
    alignSelf: "center",
    height: "10%",
    borderRadius: 30,
    backgroundColor: "#FF6A00",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  touchtext: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Monstserrat",
  },
  cvvFalse: {
    textAlign: "center",
    lineHeight: 35,
    fontFamily: "MonstserratLight",
  },
});
