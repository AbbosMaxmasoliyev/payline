import React from "react";
import { Image } from "react-native";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const CustomKeyboard = ({ onKeyPress, deleteLet }) => {
  const handleKeyPress = (key) => {
    onKeyPress(key);
  };
  const deleteItem = ()=>{
    deleteLet()
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("1")}
        >
          <Text style={styles.keyText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("2")}
        >
          <Text style={styles.keyText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("3")}
        >
          <Text style={styles.keyText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("4")}
        >
          <Text style={styles.keyText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("5")}
        >
          <Text style={styles.keyText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("6")}
        >
          <Text style={styles.keyText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("7")}
        >
          <Text style={styles.keyText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("8")}
        >
          <Text style={styles.keyText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("9")}
        >
          <Text style={styles.keyText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
         
        >
          <Text style={styles.keyText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress("0")}
        >
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={deleteItem}
        >
          <Image source={require("../assets/images/icons/RemoveWhite.png")}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    // paddingVertical: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    marginBottom: 20,
   
    justifyContent:"center",
    alignItems:"center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap:15,
    marginBottom: 10,
  },
  key: {
    width:150,
    flex: 1,
    height:58,
    backgroundColor: "transparent",
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor:"#DA630E",
    borderWidth:1,

  },
  keyText: {
    fontSize: 18,
    fontWeight: "bold",
    color:"#fff"
  },
});

export default CustomKeyboard;
