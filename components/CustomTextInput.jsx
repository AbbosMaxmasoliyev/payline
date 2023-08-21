import { useState } from "react";
import { useEffect, useRef } from "react";
import { TextInput, Text, TouchableWithoutFeedback, TouchableOpacity, Pressable } from "react-native";
import { View } from "react-native";

function CustomTextInput({ text, setText }) {

    const [keyboardShow, setKeyboard] = useState(true)


    const [keyText, setKeyText] = useState(text ? text.split("") : "".split(""))
    const [index, setIndex] = useState(keyText.length)
    const [select, setSelect] = useState(false)

    useEffect(() => {
        !select ? setIndex(keyText.length) : null
    }, [])



    const Cursor = () => {
        return <View style={{ borderWidth: 0.3, borderColor: "red" }}></View>
    }


    const data = keyText.map((item, index) => {
        if (index == keyText.length - 1) {
            return <Text key={index} onPress={() => {
                setSelect(true)
                setIndexed(keyText.length, true)

            }}>
                {item}
            </Text>
        }
        else if (index > 2) {

            return <Text key={index} onPress={() => {
                setSelect(true)
                setIndexed(index + 1, true)
            }}>
                {item}
            </Text>

        }
        else if (index > 1) {

            return <Text key={index} onPress={() => {
                setSelect(true)
                setIndexed(index + 1, true)

            }}>
                {item}
            </Text>
        }
        else if (index === 1) {

            return <Text key={index} onPress={() => {
                setSelect(true)
                setIndexed(index + 1, true)

            }}>
                {item}
            </Text>
        }
        else {
            return <Text key={index} onPress={() => {
                setSelect(true)
                setIndexed(1, true)

            }}>
                {item}
            </Text>
        }



    })
    data.splice(index, 0, <Cursor key={index} />)

    function setIndexed(index, select) {

        if (select !== keyText.length) {
            setIndex(index)
        } else {
            setIndex(index - 1)
        }
    }









    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Pressable  style={{ flexDirection: "row", height: 30, borderWidth: 1, width: 150 }} onPress={() => setKeyboard(prev => !prev)}>
                {
                    data
                }

            </Pressable>

            <TextKeyboard show={keyboardShow} onKeyPress={(e) => setKeyText(prev => {

                if (!select) {


                    prev.splice(index + 1, 0, e)
                    setIndex(index + 1)
                    const newArray = [...prev]
                    return newArray
                } else {
                    prev.splice(index, 0, e)
                    setIndex(index + 1)
                    const newArray = [...prev]
                    return newArray
                }

            })}
                deleteLetter={() => {

                    setKeyText(prev => prev.filter((item, idx) => {
                        if (index - 1 != idx) {
                            return item
                        } else {

                            setIndex(idx)
                        }
                    }))



                }} />

        </View>
    );
}


export default CustomTextInput