import { StyleSheet } from "react-native";

let GlobalStyle = StyleSheet.create({
    btn: {
        width: "80%",
        borderRadius: 35,
      
        height: 55,
        backgroundColor: "#FF6A00",
      },
      btnText: {
        color: "#fff",
    
        height: "100%",
        lineHeight: 45,
        textAlign: "center",
        fontFamily: "Monstserrat",
      },

      title: {
        color:"#FFB332",
        fontFamily:"Monstserrat",
        width:"70%",
        textAlign:"center",
       
        fontSize:20
      },
      background: {
        padding: 5,
        backgroundColor: "rgba(204, 95, 2, 0.80)",
        borderRadius: 10,
      },
      inputBlock: {
        padding:12,
        position: "relative",
        width: "80%",
        backgroundColor: "#FFCF8B",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 12,
        gap: 5,
        zIndex: 2,
      },
      key:{
        width:30,
        height:30,
        top:19,
        left:28,
        bottom:28,
        justifyContent:"center",
        alignItems:"center"
      },
      keyboard: {
        width: "100%",
        height: "40%",
        position: "absolute",
        zIndex: 3,
        bottom: 0,
    
        backgroundColor: "#000",
        borderRadius:15
      },
})

export {GlobalStyle}