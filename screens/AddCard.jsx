import { StyleSheet, Button, Text, View, TouchableWithoutFeedback, Image, TextInput, TouchableHighlight, Keyboard, TextInputBase, KeyboardAvoidingView } from "react-native";
import Gradient from "../components/Gradient";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import KeyboardDismiss from "./KeyboardDismiss";
import { SafeAreaView } from "react-native";
import { Platform } from "react-native";

const data = {
  name: "",
  cardNumber: "",
  validationDate: "",
  cvv: null
}
const AddCard = ({navigation}) => {
  const sendCheckCard=()=>{
    const cardData = {
      name: name,
      cardNumber: cardNumber,
      validationDate: validationDate,
      cvv: cvv
    }

    let check = Object.keys(data).every(item=>{
      if(data[item]==cardData[item]){
        return true
      }
    })

    navigation.navigate("Home_Send_Checkcard", {card:cardData})


  }

  const formatPhoneNumber = (number, type) => {
    const cleanedNumber = number.replace(/[^\d]/g, "");
    console.log(cleanedNumber, "clean");
    if (type == "card") {
      const areaCode = cleanedNumber.slice(0, 4);
      const firstPart = cleanedNumber.slice(4, 8);
      const secondPart = cleanedNumber.slice(8, 12);
      const thirdPart = cleanedNumber.slice(12, 16);
      if (cleanedNumber.length <= 4) {
        return `${areaCode}`;
      } else if (cleanedNumber.length <= 8) {
        return `${areaCode} ${firstPart}`;
      } else if (cleanedNumber.length <= 12) {
        return `${areaCode} ${firstPart} ${secondPart}`;
      } else if (cleanedNumber.length <= 16) {
        return `${areaCode} ${firstPart} ${secondPart} ${thirdPart}`;
      }
    } else if (type == "valid") {
      const first = cleanedNumber.slice(0, 2);
      const second = cleanedNumber.slice(2, 4);
      if (cleanedNumber.length <= 2) {
        return `${first}`;
      } else if (cleanedNumber.length <= 4) {
        return `${first}/${second}`;
      }
    }
  };



  const [name, setName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [formatCardNumber, setFormatCardNumber] = useState("")
  const [validationDate, setValidationDate] = useState("")
  const [formatValidation, setFormatValidation] = useState("")
  const [cvv, setCvv] = useState("")

  useEffect(() => {
    setFormatCardNumber((prev) => prev = formatPhoneNumber(cardNumber, "card"));
  }, [cardNumber]);


  useEffect(() => {
    setFormatValidation((prev) => prev = formatPhoneNumber(validationDate, "valid"));
  }, [validationDate]);


  const [activeInput, setActiveInput] = useState(null);




  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Gradient style={{ justifyContent: "flex-start", alignItems: "center", width: "100%", flexDirection: "column" }}>

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
          <View style={{ paddingTop: 50, width: "100%", justifyContent: "center", flexDirection: "column", gap: 15, alignItems: "center" }}>
            <Text style={{ ...styles.title, width: "90%" }}>Card Details</Text>
            <View style={styles.textInputBlock}>
              <TextInput
                placeholderTextColor={"#fff"}
                style={activeInput == "input1" ? { ...styles.textInputActive, color: "#fff" } : { ...styles.textInputNull, color: "#fff" }} placeholder="Enter your card number"
                onFocus={() => setActiveInput("input1")}
                onBlur={() => setActiveInput(null)}
                keyboardType="decimal-pad"
                value={formatCardNumber}
                onChangeText={(e) => setCardNumber(prev => prev = e)}
                maxLength={19}
                
              />
              <Image source={require("../assets/images/credit_card.png")} style={styles.iconAddCard} />
            </View>

            <TextInput

              placeholderTextColor={"#fff"}
              style={activeInput == "input2" ? styles.textInputActive : styles.textInputNull}
              placeholder="Card holder’s name"
              onFocus={() => setActiveInput("input2")}
              onBlur={() => setActiveInput(null)}
              keyboardType="ascii-capable"
              onChangeText={(name) => setName(prev => prev = name)}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
              <TextInput placeholderTextColor={"#fff"}
                style={activeInput == "input3" ? { ...styles.textInputActive, width: "60%", } : { ...styles.textInputNull, width: "60%", }}
                placeholder="Valid thru (MM/YY)"
                onFocus={() => setActiveInput("input3")}
                onBlur={() => setActiveInput(null)}
                value={formatValidation}
                onChangeText={(validDate)=> setValidationDate(prev=> prev=validDate)}
                maxLength={5}
                keyboardType="decimal-pad"
              />
              <View style={{ ...styles.textInputBlock, width: "30%" }}>
                <TextInput
                  placeholderTextColor={"#fff"}
                  style={activeInput == "input4" ? { ...styles.textInputActive, color: "#fff" } : { ...styles.textInputNull, color: "#fff" }} placeholder="CVV"
                  onFocus={() => setActiveInput("input4")}
                  onBlur={() => setActiveInput(null)}
                  keyboardType="decimal-pad"
                  onChangeText={(cvv)=> setCvv(prev=> prev =cvv)}
                />
                <Image source={require("../assets/images/icons/info.png")} style={{ ...styles.iconAddCard, right: 12, top: 12 }} />
              </View>
            </View>

          </View>
        </TouchableWithoutFeedback>


        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%", position: "absolute", bottom: 20 }}>
          <TouchableOpacity style={{ ...styles.high, backgroundColor: "#E5E5E511" }} onPress={()=> navigation.goBack()}>
            <Text style={styles.highText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.high} onPress={()=> sendCheckCard()}>
            <Text style={styles.highText}>Continue</Text>
          </TouchableOpacity>
        </View>



      </Gradient>
    </KeyboardAvoidingView>
  );
};
export default AddCard;
const styles = StyleSheet.create({

  block: {
    width: "90%",
    maxHeight: 230,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 17,
    borderRadius: 10
  },

  title: {
    width: "100%",
    fontSize: 20,
    fontFamily: "Monstserrat",
    color: "#fff"
  },
  highText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Monstserrat"
  },
  high: {
    backgroundColor: "#FF6B01",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
    position: "relative",
    zIndex: 2,
    marginTop: 20,
  },
  inputSecond: {
    height: 47,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  textInputActive: {
    width: "90%",
    borderColor: "#FF6B01",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: "MontserratMedium",
    backgroundColor: "#E5E5E50f",
    color: "#fff"
  },
  textInputNull: {
    width: "90%",
    borderColor: "#75430D",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: "MontserratMedium",
    color: "#fff"
  },
  iconAddCard: {
    position: "absolute",
    right: 8,
    top: 10
  },
  textInputBlock: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative"
  }

});
