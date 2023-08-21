import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const textColor = "#fff"



const ProfileTop = React.memo(({ image, name, role }) => {
    return (
        <View style={styles.profile}>
            <Image source={image} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.role}>{role}</Text>
            </View>
        </View>
    )
})

export default ProfileTop

const styles = StyleSheet.create({
    profile:{
        minHeight:60,
        borderBottomColor:"#FF6B01",
        borderTopColor:"#FF6B01",
        borderWidth:1,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"10%",
        paddingVertical:16,
        gap:8
    }, 
    name:{
        color:textColor,
        fontFamily:"MontserratMedium",
        fontSize:18,
        
    },
    role:{
        color:textColor,
        fontSize:12,
        fontFamily:"MonstserratLight"
    }
})