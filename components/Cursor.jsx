import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const MyTextInput = () => {
  const [text, setText] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleCursorPositionChange = (event) => {
    const { start, end } = event.nativeEvent.selection;
    console.log(start,end);
    setCursorPosition(start); // İmleç konumunu güncelle
  };

  const moveCursorToStart = () => {
    setCursorPosition(0);
  };

  const moveCursorToEnd = () => {
    setCursorPosition(text.length);
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={handleTextChange}
        onSelectionChange={handleCursorPositionChange}
      />

      <Button title="Move Cursor to Start" onPress={moveCursorToStart} />
      <Button title="Move Cursor to End" onPress={moveCursorToEnd} />
    </View>
  );
};

export default MyTextInput;