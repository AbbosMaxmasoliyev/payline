import { useContext, useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { FontContext } from "./Context";
import CountryTransfer from "./CountryTransfer";
import { useNavigation } from "@react-navigation/native";

const {width, height}= Dimensions.get("screen")

const Transactions = () => {
  const navigation = useNavigation()

  const [font, setFont] = useContext(FontContext);


  const data = [
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
    {
      name: "Makxmasoliyev Otajon",
      card: "9860120145964523",
      toSumm: "135000",
      status: "send",
      country: {
        currencyCode: "UZS",
        imageUrl: require("../assets/images/icons/circle/poland.png"),
      },
    },
  ];
  if (font) {
    return (
      <View style={styles.transactions}>
        <Text style={styles.title}>Transactions</Text>
 
          
         
          {data.map((item, index) => (
            <TouchableOpacity key={index} style={{ ...styles.transactionsItem }} onPress={()=>{
              navigation.navigate("Home_TransactionHistory", {transaction:item})
            }}>
              
              <CountryTransfer image={item.country.imageUrl}/>
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.card}>
                  To card {`***${item.toSumm.slice(0, -2)}`}
                </Text>
              </View>
              <View style={styles.currency}>
                <Text
                  style={styles.summ}
                >{`-${item.toSumm} ${item.country.currencyCode}`}</Text>
                {item.status == "send" ? (
                  <Image
                    source={require("../assets/images/icons/circle/send.png")}
                  />
                ) : (
                  <Image
                    source={require("../assets/images/icons/circle/send.png")}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
      </View>
    );
  }
};
export default Transactions;
const styles = StyleSheet.create({
  transactions: {
 
    width: "100%",
    alignSelf: "center",
    padding: 13,
    borderRadius: 15,
    backgroundColor: "rgba(68, 67, 67, 0.20)",
    marginBottom:100
  },
  card: {
    color: "#fff",
    fontFamily: "MonstserratLight",
    lineHeight: 20,
    fontSize:width/30
  },
  title: {
    fontSize: 18,
    fontFamily: "Monstserrat",
    color: "#fff",

    marginTop: 5,
    marginBottom: 15,
  },
  currency: {
    flexDirection: "column",
    alignItems: "flex-end",
    height: "100%",
    justifyContent: "space-between",
  },
  summ: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "MonstserratLight",
    lineHeight: 27,
  },
  transactionsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    height: 80,
  },
  name: {
    fontFamily: "Monstserrat",
    color: "#fff",
    fontSize:width/28
  },
  info: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "space-evenly",

    height: "100%",
  },
  
});
