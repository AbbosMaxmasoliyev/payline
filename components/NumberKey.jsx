import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { TouchableHighlight } from "react-native";
import { StyleSheet, Text, View } from "react-native";
const NumberKey = ({ onpress, deleteItem }) => {
  return (
    <View style={styles.keyboard}>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("1")}>
        <Text style={styles.text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("2")}>
        <Text style={styles.text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("3")}>
        <Text style={styles.text}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("4")}>
        <Text style={styles.text}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("5")}>
        <Text style={styles.text}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("6")}>
        <Text style={styles.text}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("7")}>
        <Text style={styles.text}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("8")}>
        <Text style={styles.text}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("9")}>
        <Text style={styles.text}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("0")}>
        <Image
          source={require("../assets/images/icons/AndroidFingerprint.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => onpress("0")}>
        <Text style={styles.text}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchhigh} onPress={() => deleteItem()}>
        <Image source={require("../assets/images/icons/RemoveWhite.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirm} onPress={() => onpress("9")}>
      <Text style={styles.textConfirm}>Tasdiqlash</Text>
    </TouchableOpacity>
    </View>
  );
};
export default NumberKey;
const styles = StyleSheet.create({
  touchhigh: {
    maxWidth: "30%",
    width: 50,
    height: 50,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textConfirm:{
    fontSize:22,
    fontFamily:"Monstserrat",
    color:"#fff"
  },
  confirm:{
    paddingHorizontal:46,
    paddingVertical:10,
    backgroundColor:"#FF6B01",
    borderRadius:20
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 23,
    fontFamily: "Monstserrat",
  },
  keyboard: {
    width: 250,
    justifyContent: "center",
    gap: 40,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
