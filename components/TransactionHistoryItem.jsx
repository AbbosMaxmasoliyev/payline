import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image, Button } from 'react-native'
import Gradient from '../components/Gradient'
import { useNavigation, useRoute } from '@react-navigation/native';
import SendCalculator from '../components/SendCalculator';
import { Navbar } from '../components/Navbar';
import Box from './Box';
import CountryTransfer from "../components/CountryTransfer"
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import PDFView from 'react-native-view-pdf';
import * as OpenAnything from 'react-native-openanything';


const TransactionHistory = () => {



    const [show, setShow] = useState(false)

    const [pdfSource, setPdfSource] = useState()


    let html = `
    <html>
        <style>
            body{
                width: 400px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
            .subtitle{
                color: #454545;
                margin-top: 20px;
                text-transform: uppercase;
            }
            p,h1{
                margin: 0;
            }
        </style>
    <body>
        <h1>TRANSACTION DETAILS</h1>
        <hr>
        <p class="subtitle">Recepinent Data</p>
        <p class="title">Makxmasoliye Otajon</p>
        <p class="subtitle">Recepinent Account Number</p>
        <p class="title">83 1020 1068 0000 1302 0414 6734</p>
        <p class="subtitle">TITLE</p>
        <p class="title">Pay to mobile</p>
        <p class="subtitle">AMOUNT</p>
        <p class="title">-900.00 PLN</p>
        <p class="subtitle">OPERATION DATE</p>
        <p class="title">05-07-2023</p>
        <p class="subtitle">BOOKING DATE</p>
        <p class="title">05-07-2023</p>
        <p class="subtitle">SENDER DATA</p>
        <p class="title">SAMANDAR MAHMUDOV</p> 
        <p class="subtitle">SENDER ACCOUNT NUMBER</p>
        <p class="title">87 1090 1043 0000 0001 5336 6276</p>
    </body>
    </html>`


    let generatePdf = async () => {
        const file = await printToFileAsync({
            html: html,
            base64: false
        })

        console.log(file.uri);
        if (file) {
            setPdfSource(file.uri)
        }
    }




    const route = useRoute()
    const item = route.params.transaction
    console.log(item);
    const date = new Date()
    const status = () => {
        if (item.status === "send") {
            return (
                <View style={{ width: "90%", alignSelf: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <Feather name="check" size={30} color="#FF8200" />
                        <Text style={{ fontSize: 20, lineHeight: 22, color: "#fff", fontFamily: "MontserratRegular" }}>Send Successfully</Text>
                    </View>


                </View>
            )
        } else if (item.status == "not") {
            return (
                <View  >
                    <Ionicons name="close-outline" size={24} color="#FF8200" />
                    <Text>Send Failed</Text>
                </View>
            )
            // <Ionicons name="md-refresh-circle-outline" size={24} color="black" />
        }
    }
    const dateObj = new Date();
    const formattedDate = format(dateObj, 'dd-MM-yy, HH:mm');

    return (
        <View style={styles.container}>
            <Gradient style={{ flexDirection: "column", justifyContent: "center" }}>
                <Box>
                    <View style={{ width: '90%', alignSelf: "center", marginTop: 15 }}>
                        <View style={{ width: 60, height: 60, justifyContent: "center", alignItems: "center" }}>
                            <CountryTransfer image={item.country.imageUrl} />
                        </View>
                        <Text style={{ ...styles.textBottom, color: "#fff", fontSize: 23, marginVertical: 20 }}>{item.name}</Text>
                    </View>
                    {
                        status()
                    }

                    <View style={{ flexDirection: "row", width: "90%", alignSelf: "center", marginVertical: 23, alignItems: "center" }}>
                        <Text style={styles.textMoneyTransaction}>45.120 PLN </Text>
                        <AntDesign name="arrowright" size={30} color="white" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.textMoneyTransaction}> 65.1215 UZS</Text>

                    </View>

                    <View style={{ justifyContent: "center", width: "90%", alignSelf: "center", flexDirection: "row", borderBottomWidth: 1.5, borderTopWidth: 1.5, borderBottomColor: "#FF6B01", borderTopColor: "#FF6B01" }}>
                        <TouchableOpacity style={{ width: "100%", paddingVertical: 19, flexDirection: "row", alignItems: "center", gap: 15, }}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                borderColor: "#FF6B01",
                                borderWidth: 2,
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row"
                            }}>
                                <Ionicons name="refresh" size={27} color="#FF6B01" />
                            </View>
                            <Text style={{ color: "#fff", fontSize: 25, fontFamily: "MontserratRegular" }}>Repeat transfer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={{ ...styles.textInfo, fontFamily: "MontserratRegular" }}>
                            Date:
                        </Text>
                        <Text style={{ ...styles.textInfo, fontFamily: "Monstserrat" }}>{formattedDate}</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={{ ...styles.textInfo, fontFamily: "MontserratRegular" }}>
                            Comission:
                        </Text>
                        <Text style={{ ...styles.textInfo, fontFamily: "Monstserrat" }}>{`4 PLN`}</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={{ ...styles.textInfo, fontFamily: "MontserratRegular" }}>
                            Currency:
                        </Text>
                        <Text style={{ ...styles.textInfo, fontFamily: "Monstserrat" }}>{`1.00 PLN = 2.668 UZS `}</Text>
                    </View>
                    <View style={{ borderColor: "#FF6B01", borderWidth: 0.7, width: "90%", alignSelf: "center" }}></View>
                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", width: "90%", justifyContent: "space-between", marginVertical: 15, }}>
                        <Text style={styles.card}>Card</Text>
                        <View >
                            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 5 }}>
                                <Text style={styles.cardNumber}>{`8600 1231 **** **23`}</Text>
                                <Image style={{ width: 25, height: 25 }} source={require("../assets/images/icons/cards/Millennium_bcp-logo-1315204029-seeklogo.png")} />
                            </View>
                            <Text style={styles.name}>{`Ibrohimbek Qalandarov`}</Text>
                        </View>
                    </View>
                </Box>


            </Gradient>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.touch} >
                    <Feather name="download" size={25} color="#FF6B01" />
                    <Text style={styles.textBottom}>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => generatePdf()}>
                    <Ionicons name="receipt-outline" size={25} color="#FF6B01" />
                    <Text style={styles.textBottom}>Check</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TransactionHistory
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    textInfo: {
        width: "50%",
        color: "#fff",
        fontSize: 17
    },
    infoCard: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        marginVertical: 16.5
    },
    textMoneyTransaction: {
        fontSize: 25,
        fontFamily: "MontserratMedium",
        color: "#fff"
    },
    card: {
        color: "#fff",
        fontFamily: "MonstserratLight",
        fontSize: 18
    },
    cardNumber: {
        color: "#fff",
        fontFamily: "Monstserrat",
        fontSize: 20
    },
    name: {
        color: "#fff",
        textAlign: "right",
        fontSize: 18,
        fontFamily: "MonstserratLight"
    },
    bottom: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#282828",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10
    },
    touch: {
        alignItems: "center"
    },
    textBottom: {
        color: "#FF6B01",
        fontSize: 15,
        fontFamily: "MontserratMedium"
    }
})