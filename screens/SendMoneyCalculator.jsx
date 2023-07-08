import { StyleSheet, Text, View } from 'react-native'
import Gradient from '../components/Gradient'
import { useNavigation, useRoute } from '@react-navigation/native';
import SendCalculator from '../components/SendCalculator';
import { Navbar } from '../components/Navbar';
const SendMoneyCalculator = () => {
  
    const route = useRoute()
  return (
    <View>
      <Gradient>
        <SendCalculator/>
        <Navbar/>
      </Gradient>
    </View>
  )
}
export default SendMoneyCalculator
const styles = StyleSheet.create({})