import { useContext, useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { FontContext } from "./Context";
import CountryTransfer from "./CountryTransfer";
const Transactions = () => {
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
            <View key={index} style={{ ...styles.transactionsItem }}>
              
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
            </View>
          ))}
      </View>
    );
  }
};
export default Transactions;
const styles = StyleSheet.create({
  transactions: {
 
    width: "90%",
    alignSelf: "center",
    padding: 13,
    borderWidth: 2,
    borderColor: "rgba(255, 130, 0, 0.40)",
    borderStyle: "solid",
    borderRadius: 15,
    backgroundColor: "rgba(68, 67, 67, 0.20)",
    marginBottom:100
  },
  card: {
    color: "#fff",
    fontFamily: "MonstserratLight",
    lineHeight: 20,
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
  },
  info: {
    width: "55%",
    flexDirection: "column",
    justifyContent: "space-around",

    height: "100%",
  },
  
});
