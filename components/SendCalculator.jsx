import { Image, StyleSheet, Text, View } from "react-native";
import Box from "./Box";
import { Pressable } from "react-native";
import CustomKeyboard from "./KeyboardNumber";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Information = ({ info, title, subtitle, keyPress }) => {

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {info ? (
        <Pressable onPress={() => keyPress}>
          <Image source={require("../assets/images/icons/info.png")} />
        </Pressable>
      ) : null}
    </View>
  );
};

const SendCalculator = () => {
  const navigation = useNavigation()
  const [sendTranfer, setsendTranfer] = useState(1);
  const [currency, setCurrency] = useState({ name: "UZS", amount: 2801 });
  const [getMoney, setGetMoney] = useState({
    name: "UZS",
    amount: currency.amount * sendTranfer,
  });

  useEffect(() => {
    setGetMoney({ name: "UZS", amount: currency.amount * sendTranfer });
  }, [sendTranfer]);
  return (
    <View style={{marginTop:100, paddingHorizontal:"5%"}}>
      <Box style={{ paddingVertical: 20, alignItems: "center" }}>
        <View style={styles.moneyContainer}>
          <View style={styles.moneyStyle}>
            <Text style={styles.pay}>You Pay</Text>
            <Text style={styles.money}>{sendTranfer}</Text>
            <Pressable style={styles.pres}>
              <Text style={styles.prestext}>{currency.name}</Text>
              <Image
                source={require("../assets/images/icons/ChevronDown.png")}
              />
            </Pressable>
          </View>
          <View style={styles.moneyStyle}>
            <Text style={styles.pay}>You Pay</Text>
            <Text style={styles.money}>{getMoney.amount}</Text>
            <Pressable style={styles.pres}>
              <Text style={styles.prestext}>PLN</Text>
              <Image
                source={require("../assets/images/icons/ChevronDown.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.info}>
          <Information title={"Fee"} subtitle={"No Comission"} />
          <Information
            title={"Today’s rate"}
            subtitle={"1 PLN = 2.810 UZS"}
            info={true}
          />
          <Information
            title={"Should arrive"}
            subtitle={"In a few minutes"}
            info={true}
          />
        </View>

        <View style={{height:"60%", alignItems:"center"}}>
          <CustomKeyboard
            dot={true}
            deleteLet={() => setsendTranfer((prev) => prev.slice(0, -1))}
            onKeyPress={(e) => setsendTranfer((prev) => prev + e)}
          />
          <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("Home_Send_SelectCard") }>
              <Text style={styles.touchText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Box>
    </View>
  );
};
export default SendCalculator;
const styles = StyleSheet.create({
  moneyContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },
  money: {
    flexDirection: "column",
    alignItems: "center",
    gap: 11,
  },
  pres: {
    borderColor: "#DA630E",
    borderWidth: 1,
    width: 77,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom:23
  },
  prestext: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    width: "60%",
    paddingVertical: 5,
  },
  money: {
 

    textAlign: "center",
    fontFamily:"MontserratMedium",
    fontSize:20,
    marginVertical:10,
    color:"#DA630E"
  },
  moneyStyle:{
    width:"50%",
    alignItems:"center",
  },
  pay: {
    color: "#fff",
    textAlign: "center",
    fontFamily:"MonstserratLight",
    fontSize:18
  },
  info: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    borderBottomColor: "#DA630E",
    borderBottomWidth: 2,
    borderTopColor: "#DA630E",
    borderTopWidth: 2,
    paddingVertical: 9,
  },
  box: {
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    height: 60,
  },
  title: {
    height: "40%",
    width: "80%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 20,
    color: "#fff",
    fontFamily: "MonstserratLight",
  },
  subtitle: {
    height: "60%",
    width: "80%",
    textAlign: "center",
    fontFamily: "MontserratMedium",
    color: "#fff",
    fontSize: 12,
   
  },
  touch:{
    paddingVertical:8,
    paddingHorizontal:45,


    marginTop:-35,
    minWidth:"90%",
    backgroundColor:"#FF6B01",
    borderRadius:20,

  },
  touchText:{
    color:"#fff",
    fontFamily:"MontserratMedium",
    fontSize:20,
    textAlign:"center",
  }
});
