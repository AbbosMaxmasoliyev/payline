import { useEffect } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import * as Font from "expo-font";

const Languages = (props) => {
  useEffect(() => {
    Font.loadAsync({
      Monstserrat: require("../assets/fonts/aquire/Montserrat-Bold.ttf"),
    }).then(() => setFont(true));
  }, []);
  const data = [
    {
      name: "O‘zbekcha",
      lanId: "uz",
      image: require("../assets/images/icons/Uzbekistan.png"),
    },
    {
      name: "Русский",
      lanId: "ru",
      image: require("../assets/images/icons/Russian.png"),
    },
    {
      name: "English",
      lanId: "en",
      image: require("../assets/images/icons/UK.png"),
    },
    {
      name: "Türkçe",
      lanId: "tur",
      image: require("../assets/images/icons/Turkiye.png"),
    },
    {
      name: "Kyrgyz",
      lanId: "kyg",
      image: require("../assets/images/icons/Kyrgyz.png"),
    },
    {
      name: "Tojiki",
      lanId: "taj",
      image: require("../assets/images/icons/Tajikistan.png"),
    },
    {
      name: "Turkmen",
      lanId: "tum",
      image: require("../assets/images/icons/Turmenistan.png"),
    },
    {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },
    {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },   {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },   {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },   {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },   {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },   {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },   {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },   {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },   {
      name: "Kazakh",
      lanId: "kaz",
      image: require("../assets/images/icons/Kazakhstan.png"),
    },
  ];

  return (
    <View style={styles.view}>
      <Pressable onPress={props.press}>
        <Image source={require("../assets/images/icons/Clear.png")}/>
      </Pressable>
      <ScrollView style={styles.scroll}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.btn} onPress={()=> {
           props.selectLang(item);
          }}>
            <Text style={styles.text}>{item.name}</Text>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
export default Languages;
const styles = StyleSheet.create({
  view: {
    width: "100%",
    backgroundColor: "#060606",
    borderColor: "rgba(255, 130, 0, 0.40)",
    borderStyle: "solid",
    borderWidth: 1,
    position: "absolute",
    bottom: "-65%",
    padding: 10,
    borderRadius:15
  },
  scroll: {
    width: "100%",
    height:400,
    
  },
  image: {
    width: 41,
    height: 30,
    borderRadius: 5,
  },
  btn: {
    height: 54,
    width: "95%",
    padding: 10,
    backgroundColor: "rgba(90, 85, 85, 0.25)",

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    margin: 6.5,
    borderRadius: 10,
  },

  text: {
    color: "#fff",
    fontFamily: "Monstserrat",
  },
});
