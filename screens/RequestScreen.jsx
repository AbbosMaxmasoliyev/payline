import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Box from "../components/Box";
import Gradient from "../components/Gradient";
import { Navbar } from "../components/Navbar";
import CountryTransfer from "../components/CountryTransfer";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import CustomKeyboard from "../components/KeyboardNumber";
import InsertNumber from "../components/InsertNumber";




const { width, height } = Dimensions.get("screen")

const RequestScreen = () => {
    const navigation = useNavigation()
    const myShadowStyle = new StyleSheet.create({
        elevation: 3,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: {
            height: 3,
            width: 0,
        },
    });
    const HEADER_HEIGHT = 30;

    const headerStyle = new StyleSheet.create({
        width: "100%",
        position: "absolute",
        backgroundColor: "#060606",

        height: HEADER_HEIGHT,
        borderWidth: 1,
        borderColor: "red",
        color: "#fff",
        fontSize: 20,
    });
    const [myStyle, setMyStyle] = useState(headerStyle);
    const [loan, setLoan] = useState(true)

    const data = [
        {
            name: "Makxmasoliyev Abbos",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            cardContact: "+998 99 121 42 37",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                imageUrl: require("../assets/images/icons/circle/poland.png"),
            },
        },
    ];

    const [active, setActive] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [myCardsThree, setMyCardsThree] = useState(data);
    const [newNumber, setNewNumber] = useState(true);

    useEffect(() => {
        setMyCardsThree(data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())))
    }, [searchText])

    return (

        <Gradient>

            <ScrollView style={{
                height: height,
                width: width,
                paddingTop: height / 15
            }}>
                <View style={styles.container}>
                    <Box
                        style={{
                            width: "90%",
                            alignItems: "center",
                            height: height / 1.12
                        }}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>Requset Money</Text>
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={() => {
                            setNewNumber(true)
                            console.log(newNumber);
                            navigation.navigate("Home_Request_NewContact")
                        }}>
                            <View style={{ borderWidth: 2, borderColor: "#FF6B01", borderRadius: 39, justifyContent: "center", alignItems: "center", padding: 9 }}>
                                <Ionicons name="keypad" size={24} color="#FF6B01" />

                            </View>
                            <Text style={styles.btntext}>New Contact</Text>
                        </TouchableOpacity>
                        <Text style={{ ...styles.subtitle, width: "90%", marginBottom: 10 }}>My Contacts</Text>
                        <TouchableWithoutFeedback onPress={() => {
                            Keyboard.dismiss()
                            setActive(false)
                            console.log(active);
                        }}>
                            <TextInput
                                placeholder="Search Contact"
                                style={active ? { ...styles.searchInput, borderColor: "#FF7B01" } : { ...styles.searchInput }}
                                placeholderTextColor={"#fff"}
                                onChangeText={(e) => setSearchText(e)}
                                onFocus={() => setActive(true)}
                                onBlur={() => setActive(false)}
                            />
                        </TouchableWithoutFeedback>
                        <ScrollView
                            style={styles.scroll}
                            showsVerticalScrollIndicator={false}
                            invertStickyHeaders={false}
                        >
                            <View style={{ width: "100%", marginVertical: 10 }}>
                                {myCardsThree.map((item, index) => (
                                    <TouchableOpacity style={styles.item} key={index} onPress={() => navigation.navigate("Home_Request_SetLoanAmount", { item })}>
                                        <View style={styles.nameRadius}>
                                            <Text style={styles.nameRadiusTitle}>{item.name[0]}</Text>
                                        </View>
                                        <View style={styles.cardInfo}>
                                            <Text style={styles.card}>{item.name}</Text>
                                            <Text style={styles.cardName}>
                                                {`${item.cardContact}`}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    </Box>
                </View>
            </ScrollView>

           
        </Gradient >
    );
};




export default RequestScreen;




const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
    },
    scroll: {
        width: "90%",
    },


    nameRadius: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#FF7B01",
        borderWidth: 2,
        borderRadius: 22.5
    },

    nameRadiusTitle: {
        color: "#fff",
        fontFamily: "MontserratMedium",
        fontSize: 20
    },
    item: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
    },

    text: {
        fontSize: 25,
        fontFamily: "Monstserrat",

        fontWeight: "600",
        lineHeight: 26,
        color: "#fff",
        paddingVertical: 23,
        paddingBottom: 13,

    },
    searchInput: {
        borderColor: "#454545",
        borderWidth: 1,
        width: "90%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: "#fff",
        fontFamily: "MontserratMedium",
        borderRadius: 15,
    },
    titleContainer: {
        width: "90%",
    },
    subtitle: {
        color: "#fff",
        fontFamily: "MonstserratLight",
        backgroundColor: "transparent",
    },
    btn: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 21,
        gap: 11,
    },
    btntext: {
        color: "#FF7B01",
        fontFamily: "Monstserrat",
        fontSize: 20,
    },
    currencyCode: {
        color: "#fff",
        width: "15%",
        textAlign: "right",
        fontSize: 16,
        fontFamily: "MontserratRegular",
    },
    cardInfo: {
        width: "65%",
        position: "relative",
        flexDirection: "column",
        gap: 5,
        justifyContent: "space-between",
    },
    card: {
        fontFamily: "Monstserrat",
        color: "#fff",
    },
    cardName: {
        fontFamily: "MonstserratLight",
        color: "#fff",
    },
    pres: {
        paddingHorizontal: 65,
        paddingVertical: 9,
        backgroundColor: "#FF6B01",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    more: {
        fontFamily: "Monstserrat",
        color: "#fff",
    },
});
