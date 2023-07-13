import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Gradient from "../components/Gradient";
import Box from "../components/Box";
import { Navbar } from "../components/Navbar";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    name: "Uzbekistan",
    lanId: "uz",
    image: require("../assets/images/icons/Uzbekistan.png"),
  },
  {
    name: "Russian",
    lanId: "ru",
    image: require("../assets/images/icons/Russian.png"),
  },
  {
    name: "United Kingdom",
    lanId: "en",
    image: require("../assets/images/icons/UK.png"),
  },
  {
    name: "Turkiye",
    lanId: "tur",
    image: require("../assets/images/icons/Turkiye.png"),
  },
  {
    name: "Kyrgyztan",
    lanId: "kyg",
    image: require("../assets/images/icons/Kyrgyz.png"),
  },
  {
    name: "Tajikistan",
    lanId: "taj",
    image: require("../assets/images/icons/Tajikistan.png"),
  },
  {
    name: "Turkmenistan",
    lanId: "tum",
    image: require("../assets/images/icons/Turmenistan.png"),
  },
  {
    name: "Kazakhstan",
    lanId: "kaz",
    image: require("../assets/images/icons/Kazakhstan.png"),
  },
];
const Recepient = ({navigation}) => {
  // const navigation = useNavigation()

  const [text, setText] = useState("");
  const [country, setCountry] = useState(data);

  useEffect(() => {
    setCountry(
      data.filter((item) => item.name.toLocaleLowerCase().includes(text))
    );
  }, [text]);

  return (
    <Gradient style={styles.grad}>
      <Box style={styles.box}>
        <Text style={styles.title}>
          Select how to deliver money to recipient
        </Text>
        <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate("Home_Send_BankCard")}>
          <Image source={require("../assets/images/NewRece.png")} />
          <View>
            <Text style={styles.bankTitle}>To bank card</Text>
            <Text style={styles.bankSubtitle}>
              Fast transfer directly to recepient’s Mastercard, Visa or other
              card
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.destination}>More options by destination</Text>
        <View
          style={{
            position: "relative",
            borderRadius: 20,
            backgroundColor: "rgba(138, 136, 136, 0.45)",
            height: height * 0.06,
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../assets/images/icons/fi-rr-searchlight.png")}
            style={{ position: "absolute", marginLeft: 16 }}
          />
          <TextInput
            onChangeText={(e) =>
              setText((prev) => (prev = e.toLocaleLowerCase()))
            }
            placeholder="Search country"
            style={{
              paddingLeft: 57,
              fontFamily: "MonstserratLight",
              width: "100%",
              color:"#fff"
            }}
            placeholderTextColor={"#fff"}
          />
        </View>
        <ScrollView
          style={{ height: height * 0.37 }}
          showsVerticalScrollIndicator={false}
        >
          {country.map((item, index) => (
            <TouchableOpacity key={index} style={styles.couTouch} onPress={()=> navigation.navigate("Home_Send_DeliverCard", {country:item})}>
              <Text style={{ color: "#fff", fontFamily: "MontserratMedium" }}>
                {item.name}
              </Text>
              <Image source={item.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Box>
      <Navbar />
    </Gradient>
  );
};
export default Recepient;
const styles = StyleSheet.create({
  grad: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: width * 0.9,
    paddingHorizontal: width * 0.05,
    marginBottom: 30,
  },
  title: {
    color: "#fff",
    fontFamily: "MontserratMedium",
    fontSize: 19,
    marginVertical: 30,
  },
  touch: {
    flexDirection: "row",
    width: width * 0.8,
    minHeight: 50,
    alignItems: "center",
    gap: 10,
    paddingVertical: 5,
  },
  bankTitle: {
    fontSize: 18,
    fontFamily: "Monstserrat",
    color: "#FF7B01",
  },
  bankSubtitle: {
    width: width * 0.6,
    color: "#fff",
    fontSize: 10,
    fontFamily: "MonstserratLight",
  },
  destination: {
    fontFamily: "MonstserratLight",
    fontSize: 20,
    marginTop: 37,
    marginBottom: 24,
    color: "#fff",
  },
  couTouch: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "rgba(90, 85, 85, 0.25)",
    borderRadius: 10,
  },
});
