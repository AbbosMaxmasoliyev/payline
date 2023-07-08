import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Box from "../components/Box";
import Gradient from "../components/Gradient";
import { Navbar } from "../components/Navbar";
import CountryTransfer from "../components/CountryTransfer";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Send = () => {
  const navigation = useNavigation()
  const myShadowStyle = new StyleSheet.create({
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  });
  const HEADER_HEIGHT = 30;

  const headerStyle = new StyleSheet.create({
    width: "100%",
    position: "absolute",
    backgroundColor: "#060606",

    height: HEADER_HEIGHT,
    borderWidth: 1,
    borderColor: "red",
    color: "#fff",
    fontSize: 20,
  });
  const [myStyle, setMyStyle] = useState(headerStyle);

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

  const [myCardsThree, setMyCardsThree] = useState(data.slice(0, 3));
  return (
    <Gradient>
      <View style={styles.container}>
        <Box
          style={{
            width: "90%",
            alignItems: "center",
            marginTop: "50%",
            marginBottom: "50%",
          }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Send Money</Text>
            <Text style={styles.subtitle}>
              Select a recepient you sent to previously or renter new recepient
              details
            </Text>
          </View>
          <Pressable style={styles.btn}>
            <Image source={require("../assets/images/addrecepient.png")} />
            <Text style={styles.btntext}>New recipient</Text>
          </Pressable>

          <Text style={{ ...styles.subtitle, width:"90%", marginBottom:10 }}>My Recipients</Text>

          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
            invertStickyHeaders={false}
          >
            <View style={{ width: "90%", marginVertical: 25 }}>
              <View>
                {myCardsThree.map((item, index) => (
                  <TouchableOpacity style={styles.item} key={index} onPress={()=> navigation.navigate("Home_Send_Calculator", {item})}>
                    <CountryTransfer image={item.country.imageUrl} />
                    <View style={styles.cardInfo}>
                      <Text style={styles.card}>
                        To card {`***${item.toSumm.slice(0, -2)}`}
                      </Text>
                      <Text style={styles.cardName}>{item.name}</Text>
                    </View>
                    <Text style={styles.currencyCode}>
                      {item.country.currencyCode}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <Pressable
              style={styles.pres}
              onPress={() => setMyCardsThree((prev) => (prev = data))}
            >
              <Text style={styles.more}>More</Text>
            </Pressable>
          </ScrollView>
        </Box>
      </View>
      <Navbar />
    </Gradient>
  );
};
export default Send;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 25,
    fontFamily: "Monstserrat",

    fontWeight: "600",
    lineHeight: 26,
    color: "#fff",
    paddingVertical: 23,
    paddingBottom: 13,
  },
  titleContainer: {
    width: "90%",
  },
  subtitle: {
    color: "#fff",
    fontFamily: "MonstserratLight",
    backgroundColor: "transparent",
  },
  btn: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 21,
    gap: 11,
  },
  btntext: {
    color: "#FF7B01",
    fontFamily: "Monstserrat",
    fontSize: 20,
  },
  currencyCode: {
    color: "#fff",
    width: "15%",
    textAlign: "right",
    fontSize: 20,
    fontFamily: "MontserratRegular",
  },
  cardInfo: {
    width: "65%",
    position: "relative",
    flexDirection: "column",
    gap: 5,
    justifyContent: "space-between",
  },
  card: {
    fontFamily: "Monstserrat",
    color: "#fff",
  },
  cardName: {
    fontFamily: "MonstserratLight",
    color: "#fff",
  },
  pres: {
    paddingHorizontal: 65,
    paddingVertical: 9,
    backgroundColor: "#FF6B01",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  more: {
    fontFamily: "Monstserrat",
    color: "#fff",
  },
});
