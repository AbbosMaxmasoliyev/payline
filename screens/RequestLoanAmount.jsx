import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useReducer } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import CustomKeyboard from '../components/KeyboardNumber'
import { useNavigation, useRoute } from '@react-navigation/native';
import reducer from '../components/Reducers';
import { useState } from 'react';
import { useEffect } from 'react';

const { width, height } = Dimensions.get("window")
const currencies = ["UZS", "EUR", "USD"];

const RequestLoanAmount = () => {


    const navigation = useNavigation();
    const route = useRoute();

    // Use reducer to manage state
    const [state, dispatch] = useReducer(reducer, {
        loanValue: '',
        country: 'UZS',
        showCurrencyModal: false,
    });

    


    const [loanValueState, setLoanValueState] = useState("")


    useEffect(() => {
        dispatch({ type: 'SET_LOAN_VALUE', payload: loanValueState })
    }, [loanValueState])
    
    return (

        <View style={{
            width: width,
            height: height,
            backgroundColor: "#060606",
            paddingTop: 30,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 4,
        }}>
            <View style={{ width: "99%" }}>

            </View>
            <View style={{
                width: "90%",
                flexDirection: "column",
                height: "50%",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "red",
                borderWidth: 1
            }}>
                <View style={styles.mainContent}>
                    <Text style={styles.loanTitle}>Your loan request to {route.params.item?.name || route.params.phoneNumber}</Text>
                    <View style={styles.loanTextInput}>
                        <Text style={styles.loanValue}>{loanValue || '0'}</Text>
                    </View>
                    <TouchableOpacity style={styles.countrySelect} onPress={() => dispatch({ type: 'TOGGLE_CURRENCY_MODAL' })}>
                        <Text style={styles.textCountry}>{country}</Text>
                        <Image source={require("../assets/images/arrow-down.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: "50%", maxHeight: 280, alignItems: "center", width: "100%" }}>
                <CustomKeyboard onKeyPress={(e) => setLoanValueState(prev => prev += e)}
                    deleteLet={() =>setLoanValueState(prev=> prev.slice(0,-1))} />
                <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate("Home_Request_Check")}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>
            {showCurrencyModal && (
                <View style={styles.currencySelect}>
                    <View style={styles.currencyModalHeader}>
                        <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_CURRENCY_MODAL' })}>
                            <MaterialIcons name="close" size={30} color="#FF6B01" />
                        </TouchableOpacity>
                        <Text style={styles.currencyModalHeaderText}>Select Currency</Text>
                    </View>
                    <View style={styles.currencyModalContent}>
                        {currencies.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => dispatch({ type: 'SET_COUNTRY', payload: item })}
                                style={country === item ? styles.activeCurrency : styles.notActiveCurrency}
                            >
                                <Text style={styles.currencyText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            )}
        </View>
    )
}

export default RequestLoanAmount

const styles = StyleSheet.create({
    mainContent: {
        width: "100%",
        alignItems:"center"
    },
    currencyModalContent:{
        flexDirection:"column",
        gap:10
    },
    currencySelect: {
        width: "100%",
        flexDirection: "column",
        gap: 15,
        height: 250,
        backgroundColor: "#030a11",
        position: "absolute",
        bottom: -1.5,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
        borderColor: "#FF8200",
        borderWidth: 1.5
    },
    activeCurrency: {
        backgroundColor: "#FF6B01",
        paddingVertical: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15
    },
    notActiveCurrency: {
        backgroundColor: "#FFB332",
        paddingVertical: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15
    },
    currencyText: {
        color: "#fff",
        fontFamily: "MontserratMedium",
        fontSize: 20
    },
    loanValue: {
        color: "#fff",
        fontFamily: "MontserratMedium",
        fontSize: 17
    },
    loanTitle: {
        fontSize: 20,
        color: "#fff",
        width: "90%",
        fontFamily: "Monstserrat",
        textAlign: "center"

    },

    loanValue: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "MontserratMedium",
        fontSize: 45,
        color: "#FF6F01"
    },
    loanTextInput: {
        fontSize: 18,
        width: "90%",
        textAlign: "center",
        fontFamily: "MontserratMedium",
        paddingHorizontal: 12,
        paddingVertical: 15,
        borderRadius: 15,
        justifyContent: "center",
        marginTop: 10
    },
    textCountry: {
        color: "#fff",
        fontFamily: "MontserratMedium"
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
        width:80
    },
    continueBtn: {
        backgroundColor: "#FF6B01",
        width: "90%",
        zIndex: 3,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginBottom: 20,
    },
    continueText: {
        color: "#fff",
        fontFamily: "Monstserrat",
        fontSize: 18
    },
})