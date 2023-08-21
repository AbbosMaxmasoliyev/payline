import { Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Gradient from '../components/Gradient'
import ProfileTop from '../components/ProfileTop'
import moment from 'moment/moment'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'
import { SvgFromXml } from "react-native-svg"
import { icons } from '../components/icons'


const { width, height } = Dimensions.get("screen")
const data = [
    {
        "timestamp": "2023-08-07T12:34:56",
        "sender": "user",
        "content": "Assalomu alaykum! Chatga xush kelibsiz."
    },
    {
        "timestamp": "2023-08-07T12:35:23",
        "sender": "assistant",
        "content": "Va alaykum assalom! Sizga qanday yordam berishim mumkin?"
    },
    {
        "timestamp": "2023-08-07T12:36:10",
        "sender": "user",
        "content": "Rahmat! Men yangi bir xizmat haqida ma'lumot olishni istayman."
    },
    {
        "timestamp": "2023-08-07T12:37:45",
        "sender": "assistant",
        "content": "Aniqroq tushunaylik, yangi xizmat haqida qo'shimcha ma'lumotlar kerak bo'lsa, iltimos, aytib bering."
    },
    {
        "timestamp": "2023-08-07T12:38:20",
        "sender": "user",
        "content": "Ha, albatta! Men internetga ulanish va qulay narxlar haqida ma'lumot olishni istayman."
    },
    {
        "timestamp": "2023-08-07T12:40:05",
        "sender": "assistant",
        "content": "Aniq! Internet paketlari va narxlari haqida ma'lumotlar kelganida sizga yordam beraman."
    },
    {
        "timestamp": "2023-08-07T12:42:15",
        "sender": "user",
        "content": "Rahmat! Endi nimalar haqida so'ray olaman?"
    },
    {
        "timestamp": "2023-08-07T12:43:30",
        "sender": "assistant",
        "content": "Sizni tinglashdan mamnunman! Barcha savollaringizni yozib kelganingizda, men ulanish va narxlar haqida ma'lumotlar yozib beraman."
    },
    {
        "timestamp": "2023-08-07T12:45:10",
        "sender": "user",
        "content": "Tashakkur! Yana kutib qolaman."
    },
    {
        "timestamp": "2023-08-07T13:10:25",
        "sender": "assistant",
        "content": "Iltimos kuting, ma'lumotlarizni tekshirib, tez orada javob beraman."
    },
    {
        "timestamp": "2023-08-07T13:15:05",
        "sender": "user",
        "content": "Ha, bo'layapti! Sabr qilaman."
    },
    {
        "timestamp": "2023-08-07T13:20:30",
        "sender": "assistant",
        "content": "Yaqin muddat ichida ma'lumotlar tayyorlanadi. Kutilmaganda men sizga xabar beraman."
    },
    {
        "timestamp": "2023-08-07T14:05:15",
        "sender": "user",
        "content": "Rahmat! Ma'lumotlar uchun tashakkur!"
    },
    {
        "timestamp": "2023-08-07T14:06:45",
        "sender": "assistant",
        "content": "Sizga yordam berishdan mamnunman! Agar yana savol yoki masala bo'lsa, menga yozib kelishingiz mumkin."
    },
    {
        "timestamp": "2023-08-07T14:10:55",
        "sender": "user",
        "content": "Xayr, hayr-hayr! Xizmatizdan foydalanish imkoniyatini ta'minlayotganiz uchun rahmat!"
    },
    {
        "timestamp": "2023-08-07T14:12:30",
        "sender": "assistant",
        "content": "Hurmat bilan! Umid qilaman, yana uchrashguncha."
    },
    {
        "timestamp": "2023-08-07T14:13:55",
        "sender": "user",
        "content": "Tabriklayman! Hush kelibsiz!"
    },
    {
        "timestamp": "2023-08-07T14:15:40",
        "sender": "assistant",
        "content": "Rahmat! Sizni yordam berishdan xursandman. Hayotda muvaffaqiyatlar!"
    },
    {
        "timestamp": "2023-08-07T14:17:25",
        "sender": "user",
        "content": "Amin, tashakkur! Xayr!"
    },
    {
        "timestamp": "2023-08-07T14:18:50",
        "sender": "assistant",
        "content": "Xayr! Yaxshi kunlarga!"
    }
]


const ChatMessage = React.memo(({ sender, content, timestamp }) => (

    <View style={sender == "user" ? styles.contentUser : styles.contentAssistant}>
        <Text style={sender == "user" ? styles.contentUserText : styles.contentAssistantText}>{content}</Text>

        <Text style={sender == "user" ? { ...styles.contentUserText, fontFamily: "MonstserratLight", fontSize: 12, textAlign: "right" } : { ...styles.contentAssistantText, fontFamily: "MonstserratLight", fontSize: 12 }}>{moment(timestamp).format('hh:mm')}</Text>
    </View>

))


const Chat = () => {

    // const [message, setMessage] = useState('');


    const [messages, setMessage] = useState(data)
    const [messageTextInput, setMessageTextInput] = useState("")

    const send = () => {
        if (messageTextInput !== "") {
            setMessage(prev => ([
                ...prev,

                {
                    "timestamp": new Date().getTime(),
                    "sender": "user",
                    "content": messageTextInput
                },
            ]))
            setMessageTextInput(prev => prev = "")
        }
    }




  

    return (
        <Gradient>
            <View style={{ paddingTop: 40 }}>
                <ProfileTop name={"Mukhammad Ali"} image={require("../assets/BEARpaylinelogo.png")} role="Bear Payline Manager" />
            </View>
            <View style={{ flex: 1, width: width, height: height, justifyContent: "flex-end" }}>
                <View style={styles.InputView}>
                    <TextInput
                        placeholder='Enter Your Message'
                        style={styles.TextMessage}
                        placeholderTextColor={"#fff"}
                        value={messageTextInput}
                        onChangeText={(messageText) => setMessageTextInput(prev => prev = messageText)}
                    />
                    <Pressable
                        onPress={() => send()}
                        style={{ justifyContent: "center", alignItems: "center", height: 50, backgroundColor: "#FF6B01", width: 50, }}>
                        <SvgFromXml xml={icons["send"].imageXML} width={30} />
                    </Pressable>
                </View>
                <ScrollView

                    ref={(ref) => { this.scrollView = ref; }}

                    onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
                    style={{ height: height * 0.8, paddingTop: 20, paddingBottom: 50, }}
                >
                    <View style={{ paddingBottom: 80, paddingHorizontal: 10 }}>
                        {
                            messages.map(({ sender, content, timestamp }, index) => (
                                <ChatMessage sender={sender} content={content} timestamp={timestamp} key={index} />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>



        </Gradient>
    )
}

export default Chat


const styleMessage = {
    padding: 5,
    paddingHorizontal: 15,
    maxWidth: width * 0.6,
    minWidth: width * 0.3,
    borderColor: "#FF6B01",
    borderWidth: 1.5,
    borderRadius: 15,
    backgroundColor: "#FF6B0111",
    marginVertical: 12
}
const textStyle = {
    color: "#fff",
    marginVertical: 3,
    fontFamily: "MontserratMedium"
}
const styles = StyleSheet.create({
    contentUser: {
        ...styleMessage,
        borderBottomEndRadius: 0,
        alignSelf: "flex-end"
    },

    contentAssistant: {
        ...styleMessage,
        borderRadius: 15,
        borderBottomStartRadius: 0,
        textAlign: "right"
    },
    contentAssistantText: {
        ...textStyle,
    },
    contentUserText: {
        ...textStyle,

    },
    scrollViewContent: {
        borderColor: "red",
        borderWidth: 1,
        height: height * 0.1
    },
    TextMessage: {
        color: "#fff",
        fontFamily: "MontserratMedium",
        width: width - 50,
        paddingLeft: 14
    },
    InputView: {
        width: "100%",
        height: 50,
        position: "absolute",
        zIndex: 99,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#1A1A19",
        borderBottomStartRadius: 0
    }
})