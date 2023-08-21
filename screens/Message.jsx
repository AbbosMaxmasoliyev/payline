import { Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import Gradient from '../components/Gradient'
import ProfileTop from '../components/ProfileTop'
import moment from 'moment/moment'
import { TextInput } from 'react-native'
import { Pressable, Animated } from 'react-native'
import { SvgFromXml } from "react-native-svg"
import { icons } from '../components/icons'
import LottieView from 'lottie-react-native';
import { useRef } from 'react'


const { width, height } = Dimensions.get("screen")

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);




const MessageSend = () => {



    const animationProgress = useRef(new Animated.Value(0));
    const [messageTextInput, setMessageTextInput] = useState("")
    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

    }, []);
    const send = () => {

    }

    return (
        <KeyboardAvoidingView>
            <Gradient>
                <View style={{ flex: 1, width: "100%", height: height * 0.6, justifyContent: "center", alignItems: "center", }}>
                    <AnimatedLottieView
                        source={require('../assets/Recommended.json')}
                        autoPlay
                        style={{
                            height: 150,
                        }}
                    />


                    <Text style={styles.subText}>
                        Tell us what you think about our app
                    </Text>
                </View>
                <View style={{ width: width, height: 50, justifyContent: "flex-end" }}>
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
                </View>
            </Gradient>
        </KeyboardAvoidingView>
    )
}

export default MessageSend


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
    },
    subText: {
        fontFamily: "MontserratMedium",
        width: 200,
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    }
})