import { StyleSheet, Text, View, Share } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import Gradient from '../components/Gradient'
import Box from '../components/Box'
import { TouchableOpacity } from 'react-native'
import { SvgFromXml } from "react-native-svg"
import { icons } from '../components/icons'
import { useNavigation } from '@react-navigation/native'



// const freecurrencyapi = new Freecurrencyapi(API_KEY);
const HelpItem = React.memo(({ imageXml, title, press }) => {

  return (
    <TouchableOpacity style={styles.touch} onPress={press}>
      <View style={styles.circle}>
        <SvgFromXml width={30} height={30} xml={imageXml} />
      </View>
      <Text style={styles.text}>{title}</Text>

    </TouchableOpacity>
  );
});

const HelpBtn = React.memo(({ imageXml, title, subtitle, press }) => {

  return (
    <TouchableOpacity style={styles.btn} onPress={press}>
      <View style={{ ...styles.circleBack, padding: 3 }}>
        <SvgFromXml width={30} height={30} xml={imageXml} />
      </View>
      <View>
        <Text style={{ ...styles.text, textAlign: "left", fontSize: 18 }}>{title}</Text>
        <Text style={styles.subtext}>{subtitle}</Text>
      </View>

    </TouchableOpacity>
  );
});



const Help = () => {
  const navigation = useNavigation()

  const shareContent = async () => {
    try {
      const options = {
        message: 'Merhaba, bu içeriği paylaşıyorum.',
        url: 'https://www.example.com', 
        title: 'Başlık' 
      };

      const result = await Share.share(options);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Gradient style={{ paddingTop: 30, justifyContent: "center", flexDirection: "column" }}>
        <Box style={{ width: "90%", alignSelf: "center", padding: 20, paddingVertical: 40, height: "auto", justifyContent: "center" }}>
          <Text style={styles.title}>Help and Contact</Text>
          <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
            <HelpItem imageXml={icons.drawPen.imageXML} title={"Share your opinion "} press={() => {

              navigation.navigate("Help_MessageFake")
            }} />
            <HelpItem imageXml={icons.likeHand.imageXML} title={"Do you like our app?"} press={() => {

              navigation.navigate("Help_Like")
            }} />
            <HelpItem imageXml={icons.heart.imageXML} title={"Recommend the app"} press={()=>shareContent() }/>
          </View>
          <Text style={{ ...styles.text, textAlign: "left", marginTop: 35, marginBottom: 20 }}>Do you have a question?</Text>
          <View style={{ gap: 10 }}>
            <HelpBtn press={() => navigation.navigate("Help_Chat")} imageXml={icons.chatOur.imageXML} title={"Chat with Us"} subtitle={"Start chat"} />
            <HelpBtn imageXml={icons.chatWe.imageXML} title={"Contact Client Service"} subtitle={"Connection fees according to the tariff"} />
            <HelpBtn imageXml={icons.faq.imageXML} title={"FAQ"} subtitle={"Find answer"} />
          </View>
        </Box>
      </Gradient>
      <Navbar />
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#fff",
    width: "90%",
    fontFamily: "Monstserrat",
  },
  circle: {
    width: 45,
    height: 45,
    borderColor: "#FF6B01",
    borderWidth: 1.5,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center"
  },
  touch: {
    width: "30%",
    alignItems: "center",
    gap: 10
  },
  text: {
    textAlign: "center",
    fontFamily: "MontserratMedium",
    color: "#fff",
    fontSize: 14
  },
  subtext: {
    fontFamily: "MontserratMedium",
    color: "#fff",
    fontSize: 10
  },
  circleBack: {
    backgroundColor: "rgba(217, 217, 217, 0.20)",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  btn: {
    flexDirection: "row",
    gap: 11,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1.5,
    borderColor: "#75430D",
    borderRadius: 20
  }
})