import React from 'react';
import { useState } from 'react';
import { Dimensions, Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("window");

const TextKeyboard2 = ({ show, setText }) => {


    const handleKeyPress = (key) => {

        if (key !== "delete") {
            console.log(key);
            setText(prev => prev += key)
        } else {
            setText(prev => prev.slice(0, -1));
        }
    };






    return (
        <View style={{ ...styles.keyboard, bottom: show ? 0 : height }}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleKeyPress('q')} style={styles.key}>
                    <Text style={styles.keyText}>q</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('W')} style={styles.key}>
                    <Text style={styles.keyText}>W</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('E')} style={styles.key}>
                    <Text style={styles.keyText}>E</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('R')} style={styles.key}>
                    <Text style={styles.keyText}>R</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('T')} style={styles.key}>
                    <Text style={styles.keyText}>T</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('Y')} style={styles.key}>
                    <Text style={styles.keyText}>Y</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('U')} style={styles.key}>
                    <Text style={styles.keyText}>U</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('I')} style={styles.key}>
                    <Text style={styles.keyText}>I</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('O')} style={styles.key}>
                    <Text style={styles.keyText}>O</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('P')} style={styles.key}>
                    <Text style={styles.keyText}>P</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleKeyPress('A')} style={styles.key}>
                    <Text style={styles.keyText}>A</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('S')} style={styles.key}>
                    <Text style={styles.keyText}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('D')} style={styles.key}>
                    <Text style={styles.keyText}>D</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('F')} style={styles.key}>
                    <Text style={styles.keyText}>F</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('G')} style={styles.key}>
                    <Text style={styles.keyText}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('H')} style={styles.key}>
                    <Text style={styles.keyText}>H</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('J')} style={styles.key}>
                    <Text style={styles.keyText}>J</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('K')} style={styles.key}>
                    <Text style={styles.keyText}>K</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('L')} style={styles.key}>
                    <Text style={styles.keyText}>L</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleKeyPress('M')} style={styles.key}>
                    <Image source={require("../assets/images/icons/bigSmal.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('Z')} style={styles.key}>
                    <Text style={styles.keyText}>Z</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('X')} style={styles.key}>
                    <Text style={styles.keyText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('C')} style={styles.key}>
                    <Text style={styles.keyText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('V')} style={styles.key}>
                    <Text style={styles.keyText}>V</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('B')} style={styles.key}>
                    <Text style={styles.keyText}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('N')} style={styles.key}>
                    <Text style={styles.keyText}>N</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress('delete')} style={styles.key}>
                    <Image source={require("../assets/images/icons/RemoveWhite.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleKeyPress(' ')} style={styles.key}>
                    <Text style={styles.keyText}>Space</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    keyboard: {
        width: width,
        height: height / 2.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'red',
        position: 'absolute',
        zIndex: 99999999999999,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    },
    key: {
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        width: width / 12,
        height: '50%',
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyText: {
        fontSize: 16,
    },
});

export default TextKeyboard2;