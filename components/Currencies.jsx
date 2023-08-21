import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableHighlight, TextInput, TouchableOpacity, Pressable, } from 'react-native';
import React, { useReducer, useEffect, useState } from 'react';
import Animated from 'react-native-reanimated';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import reducer from './Reducers';
import Gradient from './Gradient';
import Box from './Box';
import { } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomKeyboard from './KeyboardNumber';
import { GlobalStyle } from '../styles/styles';
import { SvgFromXml } from 'react-native-svg';
import { icons } from './icons';




const API_KEY = "fca_live_t7atQI7gnwmePNrOqnyJBbJfCeh34zDpSokbYcBq";
const freecurrencyapi = new Freecurrencyapi(API_KEY)

const { width, height } = Dimensions.get("window")


const currencies = ["UZS", "EUR", "USD"];

const Currencies = () => {
    const [countryName, setCountryName] = useState("")
    const [currecyValueState, setCurrecyValueState] = useState(1)
    const [deg, setDeg] = useState(180)
    const progress = new Animated.Value(deg);

    const [state, dispatch] = useReducer(reducer, {
        currency: "PLN",
    });

    const { currency, filter_country, currencyValue = 1, showKeyboard = false, currencies, currencies_data = [], currencies_country, country, showCurrencyModal } = state;

    useEffect(() => {
        freecurrencyapi.latest({
            base_currency: currency,
        }).then(response => {
            dispatch({ type: 'SET_CURRENCIES', payload: response.data })
        });

        freecurrencyapi.currencies().then(response => {
            dispatch({ type: 'CURRENCIES_DATA', payload: Object.keys(response.data) })
            // console.log(response);
        });

        freecurrencyapi.currencies().then(response => {
            dispatch({ type: 'SET_CURRENCIES_COUNTRY', payload: response.data })
        });
        filterApi()

    }, [])

    function filterApi() {
        let filterCount = currencies_data.filter((item) => currencies_country[item].name.toLowerCase().includes(countryName.toLowerCase()) ?
            item
            : null
        )
        dispatch({ type: 'FILTER_COUNTRY', payload: filterCount })
    }


    useEffect(() => {


        filterApi()
        freecurrencyapi.latest({
            base_currency: currency,
        }).then(response => {
            dispatch({ type: 'SET_CURRENCIES', payload: response.data })
        });

        freecurrencyapi.currencies().then(response => {
            dispatch({ type: 'CURRENCIES_DATA', payload: Object.keys(response.data) })

        });

        freecurrencyapi.currencies().then(response => {
            dispatch({ type: 'SET_CURRENCIES_COUNTRY', payload: response.data })
        });

    }, [countryName, currency])

    useEffect(() => {
        dispatch({ type: 'SET_CURRENCYVALUE', payload: currecyValueState })

    }, [currecyValueState])





    return (
        <Gradient style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Box style={{ height: height * 0.85, marginTop: height * 0.1, width: "95%", alignItems: "center", paddingBottom: 20 }}>
                <Text style={{ ...GlobalStyle.title, color: "#fff", marginVertical: 20 }}>Currency Calculator</Text>
                <Pressable style={{ width: "100%", justifyContent: "center", alignItems: "center" }} onPress={() => {
                    dispatch({ type: 'SET_SHOWKEYBOARD', payload: true })
                    console.log("ishladi");
                    console.log(showKeyboard);
                }}>
                    <Text style={styles.high}>{currencyValue}</Text>
                </Pressable>
                <TouchableOpacity style={styles.countrySelect} onPress={() => dispatch({ type: 'TOGGLE_CURRENCY_MODAL' })}>
                    <Text style={styles.textCountry}>{currency}</Text>
                    <Image source={require("../assets/images/arrow-down.png")} />
                </TouchableOpacity>
                <ScrollView style={{ width: "90%" }}>
                    {
                        currencies && currencies_country && currencies_data.map((item, index) => (
                            <View key={index} style={{ height: 50, padding: 15, justifyContent: "space-between", flexDirection: "row" }}>
                                <Text style={styles.currencyText}>{currencies_country[item].name}</Text>
                                <Text style={{ ...styles.currencyText, color: "#DA630E" }}>{(currencies[item] * currencyValue).toFixed(3)}</Text>
                            </View>
                        ))
                    }
                </ScrollView>

            </Box>

            <View style={showKeyboard ? { height: 300, position: "absolute", width: "100%", backgroundColor: "#262626", bottom: 0 } : { height: 300, position: "absolute", width: "100%", backgroundColor: "#262626", bottom: -250 }}>
                <View>
                    <TouchableOpacity onPress={() => {
                        dispatch({ type: 'SET_SHOWKEYBOARD', payload: !showKeyboard })

                    }

                    } style={{ marginTop: 5 }}>
                        <View style={styles.button}>
                            <SvgFromXml width={20} height={20} xml={icons.chevronDownIcon.imageXML}
                                style={{ transform: [{ rotate: showKeyboard ? `0deg` : `180deg` }] }}
                            />
                        </View>
                    </TouchableOpacity>

                </View>
                <CustomKeyboard onKeyPress={(summ) => setCurrecyValueState(prev => prev += summ)} deleteLet={() => setCurrecyValueState(prev => prev = prev.slice(0, -1))} />
            </View>
            {showCurrencyModal && (
                <View style={styles.currencySelect}>
                    <View style={styles.currencyModalHeader}>
                        <TouchableOpacity onPress={() => {
                            dispatch({ type: 'TOGGLE_CURRENCY_MODAL' })
                            setCountryName("")
                        }}>
                            <MaterialIcons name="close" size={30} color="#FF6B01" />
                        </TouchableOpacity>
                        <Text style={styles.currencyModalHeaderText}>Select Currency</Text>
                    </View>
                    <View style={{ justifyContent: "center", flexDirection: "row", marginVertical: 10 }}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={"#fff"}
                            onChangeText={(name) => setCountryName(prev => prev = name)}
                            style={{ backgroundColor: "#262626", fontFamily: "MontserratMedium", height: 60, color: "#fff", borderRadius: 10, width: "95%", paddingHorizontal: 10 }} />
                    </View>
                    <ScrollView style={{ paddingBottom: 70, height: "70%" }}>
                        <View style={styles.currencyModalContent}>
                            {filter_country.map((item, index) => <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    dispatch({ type: 'SET_COUNTRY', payload: item })
                                    dispatch({ type: 'CURRENCY', payload: currencies_country[item].code })
                                }}
                                style={currency === currencies_country[item].code ? styles.activeCurrency : styles.notActiveCurrency}
                            >
                                <View style={{ borderColor: "#FF6B01", borderWidth: 1, width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#fff", fontFamily: "MontserratMedium" }}>{currencies_country[item].symbol}</Text>
                                </View>
                                <Text style={{ ...styles.currencyText, width: "70%" }}>{currencies_country[item].name}</Text>
                                <Text style={styles.currencyText}>{currencies_country[item].code}</Text>
                            </TouchableOpacity>)

                            }
                        </View>
                    </ScrollView>
                </View>
            )}

        </Gradient>
    )
}

export default Currencies

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 5,
    },
    countrySelect: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 15,
        width: 80,
        marginVertical:10
    },
    high: {
        fontSize: 40,
        color: "#DA630E",
        marginVertical: 20,
        fontFamily: "Monstserrat"
    },
    currencyModalContent: {
        gap: 15,
        width: width,
        paddingHorizontal: 10,
    },

    currencySelect: {
        backgroundColor: "#000",
        height: "100%",
        zIndex: 5,
        position: "absolute",
        top: 30
    },
    textCountry: {
        color: "#fff",
        fontFamily: "MontserratMedium"
    },
    activeCurrency: {
        backgroundColor: "#FF6B01",
        paddingVertical: 15,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 15,
        flexDirection: "row",
        padding: 10,
    },
    notActiveCurrency: {
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        alignItems: "center",
        borderRadius: 15,
        padding: 10,
    },
    currencyText: {
        color: "#fff",
        fontFamily: "MontserratMedium",
        fontSize: 16
    },
})