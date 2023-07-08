import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import NumberKey from "./NumberKey";
import { GoBack } from "./Navbar";
const LockNumber = ({ set, confirm }) => {
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (password.length > 4) {
      setPassword((prev) => prev.slice(0, 4));
    }
  }, [password]);
  console.log(password);
  return (
    <View>
      

      <Text style={styles.text}>PIN kodni kiriting</Text>
      {set==="set" ? (
        <Text
          style={{
            color: "#878787",
            marginBottom: 25,
            fontSize: 13,
            width: 200,
            textAlign: "center",
            alignSelf: "center",
            fontFamily: "MonstserratLight",
          }}
        >
          Kiritilgan PIN kod 4 ta belgi bo’lishi shart
        </Text>
      ) : null}
      {set==="confirm" ? (
        <Text
          style={{
            color: "#878787",
            marginBottom: 25,
            fontSize: 13,
            width: 200,
            textAlign: "center",
            alignSelf: "center",
            fontFamily: "MonstserratLight",
          }}
        >
        Kiritilgan PIN kod bilan tasdiqlang
        </Text>
      ) : null}
      <View style={styles.password}>
        <Image
          source={
            password[0]
              ? require("../assets/images/icons/textFull.png")
              : require("../assets/images/icons/textNull.png")
          }
        />
        <Image
          source={
            password[1]
              ? require("../assets/images/icons/textFull.png")
              : require("../assets/images/icons/textNull.png")
          }
        />
        <Image
          source={
            password[2]
              ? require("../assets/images/icons/textFull.png")
              : require("../assets/images/icons/textNull.png")
          }
        />
        <Image
          source={
            password[3]
              ? require("../assets/images/icons/textFull.png")
              : require("../assets/images/icons/textNull.png")
          }
        />
      </View>
      <NumberKey
        onpress={(e) => setPassword((prev) => (prev += e))}
        deleteItem={() => setPassword((prev) => prev.slice(0, -1))}
      />
    </View>
  );
};
export default LockNumber;
const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "Monstserrat",
    textAlign: "center",
    marginBottom: 25,
    fontSize: 20,
  },
  textNull: {
    borderColor: "#FFB332",
    backgroundColor: "transparent",
    width: 20,
    height: 20,
    borderRadius: 20,
    color: "red",
    display: "flex",
  },
  textPassword: {
    borderColor: "#FFB332",
    backgroundColor: "#FFB332",
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  password: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 7,
    marginBottom: 54,
  },
});
