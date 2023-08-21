import React from "react";
import { Image } from "react-native";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const CustomKeyboard = ({ onKeyPress, deleteLet, dot, style }) => {
 
  
  const deleteItem = ()=>{
    deleteLet()
  }

  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("1")}
        >
          <Text style={styles.keyText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("2")}
        >
          <Text style={styles.keyText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("3")}
        >
          <Text style={styles.keyText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("4")}
        >
          <Text style={styles.keyText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("5")}
        >
          <Text style={styles.keyText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("6")}
        >
          <Text style={styles.keyText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("7")}
        >
          <Text style={styles.keyText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("8")}
        >
          <Text style={styles.keyText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("9")}
        >
          <Text style={styles.keyText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.key}
          onPress={() => dot?onKeyPress("."):null}
        >
          <Text style={styles.keyText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.key}
          onPress={() => onKeyPress("0")}
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
    alignItems:"center",
    flex:1
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap:15,
    marginBottom: 5,
  },
  key: {
    width:150,
    flex: 1,
    height:40,
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
