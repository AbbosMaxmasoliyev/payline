import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import {TouchableWithoutFeedback, Keyboard} from "react-native"
import DeliverCard from './DeliverCard';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';


function KeyboardDismiss({children}) {
  return (
    <TouchableWithoutFeedback onPressIn={Keyboard.dismiss}  accessible={false}>
        {children}
    </TouchableWithoutFeedback>
  );
}


export default KeyboardDismiss