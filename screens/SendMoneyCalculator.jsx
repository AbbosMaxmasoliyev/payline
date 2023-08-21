import { StyleSheet, Text, View } from 'react-native'
import Gradient from '../components/Gradient'
import { useNavigation, useRoute } from '@react-navigation/native';
import SendCalculator from '../components/SendCalculator';
import { Navbar } from '../components/Navbar';
const SendMoneyCalculator = () => {
  
    const route = useRoute()
  return (
    <View style={styles.container}>
      <Gradient style={{flexDirection:"column", justifyContent:"center"}}>
        <SendCalculator/>
      </Gradient>
        <Navbar/>
    </View>
  )
}
export default SendMoneyCalculator
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center"
  }
})