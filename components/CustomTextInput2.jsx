import { useState } from "react";
import { useEffect, useRef } from "react";
import { TextInput, Text, TouchableWithoutFeedback, TouchableOpacity, Pressable } from "react-native";
import { View } from "react-native";

function CustomTextInput2({ text, style, setSelect, id, showId, setId, change }) {

    const [uzgartir, setUzgartir] = change

    const [input, setInput] = useState(<Text></Text>)
    const [textIchki, setTextIchki] = text
    console.log(textIchki);
    const [keyText, setKeyText] = useState(textIchki)

    useEffect(() => {
            setInput(<Text>{textIchki}</Text>)
    }, [textIchki])




    const Cursor = () => {
        return <View style={{ borderWidth: 0.3, borderColor: "red", display: id == showId ? "flex" : "none" }}></View>
    }


    return (
        <View style={style}>
            <Pressable style={{ flexDirection: "row", height: 30, borderWidth: 1, width: 150 }} onPress={() => {
                setId(id)
                setSelect(true)
            }}
            >
                {
                    input
                }
            </Pressable>
        </View>
    );
}


export default CustomTextInput2