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
import { useContext, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

const Main = () => {
  const navigation = useNavigation();

  const [font, setFont] = useContext(FontContext);

  if (font) {
    return (
      <View style={styles.container}>
        <ScrollView>
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
              <Pressable style={{ ...styles.back }}>
                <Text style={styles.text}>Request</Text>
              </Pressable>
              <Pressable
                style={{ ...styles.back }}
                onPress={() => navigation.navigate({ name: "Home_Send" })}
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
    borderColor: "red",
    borderWidth: 1,
  },
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
