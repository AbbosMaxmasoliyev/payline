import { View, Text } from 'react-native'
import LockNumber from '../components/LockNumber'
import { StyleSheet } from 'react-native'
import { GoBack } from '../components/Navbar'
import CarouselWrapper from '../components/Carousel'
const LockScreen = ({}) => {
  const set = true
  return (
    <View style={style.container}>
    {set ? (
      <View style={{ position: "absolute", top: "10%", left: "8%" }}>
        <GoBack />
      </View>
    ) : null}
      <LockNumber set={"confirm"}/>
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