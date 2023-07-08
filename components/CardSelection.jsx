import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MyCard = ({ name, image, number, keypress }) => {
  return (
    <TouchableOpacity onPress={keypress} style={styles.touch}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.numberText}>{`***${number.slice(
        -4,
        number.length
      )}`}</Text>
    </TouchableOpacity>
  );
};
const CardSelection = () => {
  const cardsData = [
    {
      name: "Bank Mellinium",
      number: "9860_1512_4565_4562",
      image: require("../assets/images/icons/cards/Millennium_bcp-logo-1315204029-seeklogo.png"),
    },
    {
      name: "Bank Polski",
      number: "9860_1512_4565_1245",
      image: require("../assets/images/icons/cards/pko-white-bg.png"),
    },
    {
      name: "Santander",
      number: "9860_1512_4565_1245",
      image: require("../assets/images/icons/cards/apple-touch-icon-120x120.png"),
    },
  ];
  return (
    <View style={{ padding: "5%" }}>
      <Text style={styles.title}>Select Card</Text>
      <Text style={styles.info}>Select the card you want to transfer to</Text>

      <View style={styles.cards}>
        {cardsData.map((item, index) => (
          <MyCard
            image={item.image}
            name={item.name}
            number={item.number}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};
export default CardSelection;
const styles = StyleSheet.create({
  cards: {
    flexDirection: "column",
    gap: 18,
    alignItems: "center",
  },
  touch: {
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-around",
    alignItems:"center"
  },
  image: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "red",
  },
  text: {
    color: "#fff",
    width: "70%",
    fontFamily:"Monstserrat"
  },
  numberText: {
    color: "#fff",
  },
  title:{
    fontFamily:"Monstserrat",
    color:"#fff",
    marginTop:19,
  },
  info:{
    fontFamily:"MonstserratLight",
    marginVertical:16,
  }
});
