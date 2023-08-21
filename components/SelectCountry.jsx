import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from '@motify/components'

import { SvgFromUri, SvgFromXml } from 'react-native-svg'



let { height, width } = Dimensions.get("screen")
const SelectCountry = ({ keypress, data }) => {

    return (

        <View>
            <ScrollView style={styles.ScrollView} scrollIndicatorInsets={false}>
                {
                    data.map(({name, phoneCode, imageXML}, index) => {
                        return (
                            <TouchableOpacity onPress={() => keypress({name, phoneCode, imageXML})} key={index} style={styles.btn}

                            >
                                <View style={{ justifyContent: "flex-start", alignItems: "center", width: 35, height: 35, overflow: "hidden",  borderRadius: 17.5, paddingTop:1  }}>
                                    <SvgFromXml xml={imageXML} width={35} height={35} />
                                </View>
                                <Text style={styles.btnText}>{name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default SelectCountry

const styles = StyleSheet.create({
    ScrollView: {
        height: height * 1,
        width:"95%",
        flexDirection:"column",
    },
    btn: {
        marginVertical:5,
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal:10,
        backgroundColor:"#444854ba",
        borderRadius:10,
    },
    btnText: { 
        color: "#fff",
        fontFamily:"MontserratMedium",
        fontSize:width*0.05,
        
     }
})