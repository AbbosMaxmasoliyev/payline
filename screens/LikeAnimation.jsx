import React, { useRef, useState, } from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, ScrollView, Image, Easing } from 'react-native';
import Gradient from "../components/Gradient"
// import AnimatedLottieView from 'lottie-react-native';
import animateJson from "./animation_ll3jdcp2.json"
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);


const LikeAnimation = () => {

    const navigation = useNavigation()
    const scrollRef = useRef(null)

    const [likes, setLikes] = useState(500)
    const [staticLike, setStaticLike] = useState()
    const [dinamicLiker, setDinamicLikes] = useState()
    const [dinamicLikerOld, setDinamicLikesOld] = useState()
    const [likeLength, setLikeLength] = useState(1)


    const animationProgress = useRef(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        setTimeout(() => {
            navigation.goBack()
        }, 3500)
    }, []);




    useEffect(() => {
        function SetLiker() {
            let like = (likes + 1).toString()
            console.log(like);

            let likesStr = likes.toString()


            let statik = "";
            let dinamik = "";
            let dinamikOld = "";

            for (let i = 0; i < likesStr.length; i++) {
                if (likesStr[i] == like[i]) {
                    statik += likesStr[i]
                } else {
                    dinamikOld += likesStr[i]
                    dinamik += like[i]
                }
            }
            setStaticLike(statik)
            setDinamicLikes(dinamik)
            setDinamicLikesOld(dinamikOld)
            setLikeLength(dinamikOld.length)

            console.log(staticLike, dinamicLiker, dinamicLikerOld);
        }

        SetLiker()





    }, [])


    return (
        <Gradient>
            <View style={{ flexDirection: "column", justifyContent: "center", flex: 1, alignItems: "center", height: "100%", width: "100%", }}>
                <View style={{ position: "absolute", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <AnimatedLottieView
                        source={require('./animation_ll3jdcp2.json')}
                        autoPlay
                        loop={true}
                        style={{
                            height: "100%",

                        }}
                    />
                </View>
                <View style={{
                    width: "100%",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", }}>
                        <Text style={styles.text}>{staticLike}</Text>
                        <ScrollView
                            ref={(ref) => { this.scrollView = ref; }}
                            indicatorStyle={false}
                            onContentSizeChange={() => {
                                setTimeout(() => {
                                    this.scrollView.scrollToEnd({ animated: true })
                                }, 750)
                            }}
                            style={{ maxWidth: likeLength * 60, height: 100, marginBottom: -1 }}
                        >
                            <Text style={styles.text}>{dinamicLikerOld}</Text>
                            <Text style={styles.text}>{dinamicLiker}</Text>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.subText}>people liked our app.
                            Thank you for your attention</Text>
                    </View>
                </View>
            </View>
        </Gradient>



    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        color: "#FF6B01",
        lineHeight: 100,
        height: 100,
        fontFamily: "Monstserrat",
        fontSize: 80,
        padding: 1
    },
    subText: {
        fontFamily: "MontserratMedium",
        width: 200,
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    }
});

export default LikeAnimation;