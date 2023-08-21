import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const MyCard = React.memo(({ name, image, number, keypress }) => {
  return (
    <TouchableOpacity onPress={() => keypress(number)} style={styles.touch}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.numberText}>{`***${number.slice(
        -4,
        number.length
      )}`}</Text>
    </TouchableOpacity>
  );
});

const CardSelection = ({ selectcard, navigation }) => {
  const cardsData = [
    {
      name: "Bank Mellinium",
      number: "9860_1512_4565_4562",
      image: require("../assets/images/icons/cards/Millennium_bcp-logo-1315204029-seeklogo.png"),
    },
    {
      name: "Bank Mellinium",
      number: "9860_1512_4565_4563",
      image: require("../assets/images/icons/cards/Millennium_bcp-logo-1315204029-seeklogo.png"),
    },
    {
      name: "Bank Polski",
      number: "9860_1512_4565_1245",
      image: require("../assets/images/icons/cards/pko-white-bg.png"),
    },
    {
      name: "Santander",
      number: "9860_1512_4565_1247",
      image: require("../assets/images/icons/cards/apple-touch-icon-120x120.png"),
    }
  ];

  const renderCard = ({ item }) => (
    <MyCard
      image={item.image}
      name={item.name}
      number={item.number}
      key={item.number}
      keypress={selectcard}
    />
  );

  return (
    <View style={{ padding: "5%" }}>
      <Text style={styles.title}>Cards</Text>
      <Text style={styles.info}>Cards on your account</Text>

      <TouchableOpacity
        style={{
          ...styles.touch,
          justifyContent: "flex-start",
          gap: 10,
          marginBottom: 25,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("Home_AddCard")}
      >
        <Image
          source={require("../assets/images/addcard.png")}
          style={{
            ...styles.image,
            borderWidth: 1,
            borderColor: "#FFB332",
            width: 40,
            height: 40,
          }}
        />
        <Text style={styles.text}>Add Card</Text>
      </TouchableOpacity>

      <FlatList
        data={cardsData}
        renderItem={renderCard}
        keyExtractor={(item) => item.number}
        numColumns={1}
        horizontal={false}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

export default CardSelection;

const styles = StyleSheet.create({
  cardsContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    gap:10
  },
  touch: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#75430D",
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    height: 55,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  text: {
    color: "#fff",
    width: "70%",
    fontFamily: "Monstserrat",
  },
  numberText: {
    color: "#fff",
    fontFamily: "MontserratMedium",
  },

  title: {
    fontFamily: "Monstserrat",
    color: "#fff",
    marginTop: 19,
  },
  info: {
    fontFamily: "MonstserratLight",
    marginVertical: 16,
    color: "#fff",
  },
});