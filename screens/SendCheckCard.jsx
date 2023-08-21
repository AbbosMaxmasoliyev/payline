import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import { MotiView } from "@motify/components";
import LinearGradient from "react-native-linear-gradient";
import { Children, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen")

const LoadingIndicator = ({ size, delay }) => {
    return (
        <MotiView

            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: size / 5,
                borderColor: "#000",
                shadowColor: "#000",
                backgroundColor: "#fff",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 1,
                shadowRadius: 10,
            }}
            transition={{

                type: "timing",
                duration: 1000,
                repeat: Infinity
            }}
            from={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: "#FF6B01",
                borderColor: "#060606",
            }}
            animate={{

                width: size + 50,
                height: size + 50,
                borderRadius: size + 20,
                borderColor: "#FF6B01",
                backgroundColor: "#FFA552",
            }}




        >

            <Ionicons name="card-outline" size={50} color="#fff" />
        </MotiView>
    );
};




const Animation = ({ size, icon, text, image }) => {

    
    return (
        <View style={{height:"60%", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
            <View style={{height:"60%", justifyContent:"center", flexDirection:"column",alignItems:"center"}}>
                {icon}
                {image}
            </View>
            <Text style={{
                height:"40%", 
                justifyContent:"center", 
                alignItems:"center", 
                color:"#fff", 
                fontFamily:"Monstserrat",
                fontSize:25,
                textAlign:"center"
                }}>
                {text}
            </Text>
        </View>
    );
}


const SendCheckCard = () => {
    const circle =  <Image source={require("../assets/images/success.gif")} style={{width:150, height:150}} />
    const notCircle = <Ionicons name="circlecloe" size={50} color={"#fff"}/>

    const navigation = useNavigation()
    const [add, setAdd] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setAdd("send")

        }, 2500)


    }, [])


    useEffect(() => {
        setTimeout(() => {
            if (add == "send") {
                navigation.navigate("Home_Send_SelectCard")
            } else if (add == "not") {
                navigation.goBack()
            }
        }, 1500)
    }, [add])

    return (
        <View style={styles.container} >
            {
                add ? null : <LoadingIndicator size={150} delay={0} />
            }{
                add == "send" ?<Animation  text={"Your card was added succesfully"}  image={circle} size={150}/> :null 
            }
            {
                add == "not" ? <Animation text={"Something went wrong. Please try again!!!"} icon={notCircle} size={150}/> : null
            }
        </View>
    );
};
export default SendCheckCard;

const styles = StyleSheet.create({

    container: {
        width: width,
        height: height,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#060606"
    },

});
