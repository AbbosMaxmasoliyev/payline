import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import CarouselWrapper from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import Transactions from "../components/Transactions";
import { FontContext } from "../components/Context";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import MyTabs from "./TabNavigator";
import { Keyboard } from "react-native";
// import animationData from './animation_lkvavsl4.json';
import AnimatedLottieView from "lottie-react-native";
const { width, height } = Dimensions.get("screen")

const Main = ({ navigation }) => {
  // const navigation = useNavigation();

  const [font, setFont] = useContext(FontContext);


  useEffect(() => {
    async function Run() {
      const result = await fetch('https://bear-payline-server-87da0985e77c.herokuapp.com/api/country/get/all')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }

    Run();
  }, [])

  if (font) {
    return (
      <View style={styles.container} onPointerEnter={() => Keyboard.dismiss()}>
        <ScrollView style={{ flex: 1, height: height - 30, marginTop: 30 }}>
          <CarouselWrapper />
          <View
            style={{ flexDirection: "column", gap: 17, alignItems: "center" }}
          >
            <View
              style={{
                position: "relative",
                flexDirection: "row",
                gap: 23,
                width: "90%",
                justifyContent: "space-between",
              }}
            >
              <Pressable style={{ ...styles.back }} onPress={() => navigation.navigate("Home_Request")}>
                <Text style={styles.text}>Request</Text>
              </Pressable>
              <Pressable
                style={{ ...styles.back }}
                onPress={() => navigation.navigate("Home_Send")}
              >
                <Text style={styles.text}>Send</Text>
              </Pressable>
            </View>
            <Pressable style={{ ...styles.back, width: "90%" }}>
              <Text style={styles.text}>Bonuses</Text>
            </Pressable>

            <View style={styles.bonuses}>
              <Text
                style={{
                  fontFamily: "Monstserrat",
                  color: "#fff",
                  textAlign: "center",
                  position: "relative",
                  fontSize: 12,
                  zIndex: 2,
                  width: "80%",
                }}
              >
                Make up to PLN 4 for each new friend you invite who make first
                transaction.
              </Text>
              <Image
                source={require("../assets/images/box.png")}
                style={{ ...styles.box }}
              />
            </View>
          </View>
          <Transactions />
        </ScrollView>
        <Navbar />
      </View>
    );
  }
};
export default Main;

const styles = StyleSheet.create({
  dotsContainer: {
    width: 120,
    height: 50,
  },
  container: {
    width: width,
    height: height - 30,
    marginTop: 30,
    backgroundColor: "#060606",
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  summaryScrollContainer: {
    marginBottom: 12,
  },
  summaryContainer: {
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#060606",
  },
  back: {
    backgroundColor: "#FF6B01",
    maxWidth: "100%",
    minWidth: "40%",
    position: "relative",
    height: 47,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Monstserrat",
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },

  bonuses: {
    width: "90%",
    height: 80,
    borderWidth: 3,
    borderColor: "#FF8200",
    borderRadius: 50,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 20,
  },
  box: {
    position: "absolute",
    left: -25,
    bottom: -25,
    zIndex: -1,
  },
});
