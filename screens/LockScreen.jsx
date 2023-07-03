import { View, Text } from 'react-native'
import LockNumber from '../components/LockNumber'
import { StyleSheet } from 'react-native'
const LockScreen = () => {
  return (
    <View style={style.container}>
      <LockNumber set={true}/>
    </View>
  )
}
export default LockScreen
const style= StyleSheet.create({
  container:{
    width: "100%",
    flex: 1,
    justifyContent: "space-between",

    display: "flex",
    backgroundColor: "#060606",
    justifyContent:"center",
    alignItems:"center"
  }
})