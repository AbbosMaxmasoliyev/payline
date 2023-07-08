import { StyleSheet, Text, View } from 'react-native'
import { GlobalStyle } from '../styles/styles'
const Box = ({children, style}) => {
  return (
    <View style={{...GlobalStyle.internal,...style}}>
      {children}
    </View>
  )
}
export default Box
const styles = StyleSheet.create({})