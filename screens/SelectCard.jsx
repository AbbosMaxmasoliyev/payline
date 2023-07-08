import { StyleSheet, Text, View } from "react-native";
import Gradient from "../components/Gradient";
import { Navbar } from "../components/Navbar";
import CardSelection from "../components/CardSelection";
import Box from "../components/Box";
const SelectCard = () => {
  return (
    <Gradient>
      <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
        <Box style={{ width: "90%" }}>
          <CardSelection />
        </Box>
        </View>
        <Navbar />
    </Gradient>
  );
};
export default SelectCard;
const styles = StyleSheet.create({});
