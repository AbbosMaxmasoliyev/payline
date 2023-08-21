import React, { useReducer, useEffect, useRef, createContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { SvgFromXml } from 'react-native-svg';
import Gradient from "../components/Gradient";
import { Images } from "./Images";
import { icons } from "./icons";
import reducer from "./Reducers";
import { useNavigation } from "@react-navigation/native";
// Reducer function


// Initial state for the reducer
const initialState = {
  countryShow: false,
  countryName: "",
  countryPhoneCode: "+355",
  country: Images.filter(item => item.phoneCode === "+355")[0],
  countries: Images,
  activeInput: null,
  phoneNumber: null
};

// Create the context
const AddCardContext = createContext();

const AddCard = () => {

  const navigation = useNavigation()
  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { countryShow, countryName, phoneNumber, countryPhoneCode, country, countries, activeInput } = state;

  useEffect(() => {
    dispatch({ type: "SET_COUNTRIES", payload: Images.filter(item => item.name.toLowerCase().includes(countryName)) });
  }, [countryName]);

  useEffect(() => {
    dispatch({ type: "SET_COUNTRY", payload: Images.filter(item => item.phoneCode === countryPhoneCode)[0] });
  }, [countryPhoneCode]);

  useEffect(() => {
    console.log(phoneNumber);
  }, [phoneNumber]);

  useEffect(() => {
    if (country) {
      inputRef.current.focus();
    }
  }, [country]);

  const sendCheckCard = () => {
    // Your logic to handle "Continue" button press
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <AddCardContext.Provider value={{ state, dispatch }}>
          <View style={styles.container}>
            <Text style={styles.title}>Enter phone number</Text>
            <View style={styles.textInputBlock}>
              <TouchableOpacity style={styles.country} onPress={() => dispatch({ type: "SET_COUNTRY_SHOW", payload: true })}>
                {country?.imageXML && <SvgFromXml width={30} height={30} xml={country.imageXML} />}
                <Text style={styles.countryName}>
                  {country?.name ? country.name : "Invalid country name"}
                </Text>
                <SvgFromXml width={30} height={30} xml={icons.chevronDown.imageXML} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholderTextColor="#fff"
                style={activeInput === "input4" ? { ...styles.textInputActive, width: "25%" } : { ...styles.textInput, width: "25%" }}
                placeholder="Code"
                onFocus={() => dispatch({ type: "SET_ACTIVE_INPUT", payload: "input4" })}

                keyboardType="decimal-pad"
                onChangeText={(phoneCode) => dispatch({ type: "SET_COUNTRY_PHONE_CODE", payload: phoneCode })}
                value={countryPhoneCode}
              />
              <TextInput
                placeholderTextColor="#fff"
                ref={inputRef}
                style={activeInput === "input3" ? { ...styles.textInputActive, width: "65%" } : { ...styles.textInput, width: "65%" }}
                placeholder="Phone number"
                onFocus={() => dispatch({ type: "SET_ACTIVE_INPUT", payload: "input3" })}
                onChangeText={(phonenumber) => dispatch({ type: "SET_PHONENUMBER", payload: `${countryPhoneCode}${phonenumber}` })}
                maxLength={15}
                keyboardType="decimal-pad"
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonCancel} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContinue} onPress={() => sendCheckCard()}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate("Home_Request_SetLoanAmount", {phoneNumber:phoneNumber} )}>Continue</Text>
              </TouchableOpacity>
            </View>
            {countryShow && (
              <View style={styles.countryModal}>
                <TouchableOpacity onPress={() => dispatch({ type: "SET_COUNTRY_SHOW", payload: false })} style={styles.closeIcon}>
                  <SvgFromXml width={40} height={40} xml={icons.closeIcon.imageXML} />
                </TouchableOpacity>
                <Text style={{ ...styles.title, marginTop: 10 }}>Select Country</Text>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor="#fff"
                  onChangeText={(name) => dispatch({ type: "SET_COUNTRY_NAME", payload: name })}
                />
                <ScrollView showsVerticalScrollIndicator={false} style={styles.countryList}>
                  <View style={{ flexDirection: "column", alignItems: "center" }}>
                    {countries.map((item, index) => (
                      <TouchableOpacity
                        style={styles.countryItem}
                        onPress={() => {
                          dispatch({ type: "SET_COUNTRY_PHONE_CODE", payload: item.phoneCode });
                          dispatch({ type: "SET_COUNTRY_SHOW", payload: false });
                        }}
                        key={index}
                      >
                        {item.imageXML && <SvgFromXml width={30} height={30} xml={item.imageXML} />}
                        <Text style={styles.countryName}>{item.name}</Text>
                        <Text style={styles.countryCode}>{item.phoneCode}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            )}
          </View>
        </AddCardContext.Provider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  textInput: {
    width: "49%",
    borderColor: "#75430D",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: "MontserratMedium",
    color: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    gap: 20,
    backgroundColor: "#060606"
  },
  title: {
    fontSize: 20,
    fontFamily: "Monstserrat",
    color: "#fff",
    marginTop: 50,
    width: "89%",
  },
  country: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 10,
    paddingLeft: 5,
    paddingRight: 0,
    borderRadius: 5,
    backgroundColor: "#5757578a",
  },
  countryName: {
    width: "75%",
    color: "#fff",
    fontFamily: "MontserratMedium",
    fontSize: 18,

    paddingLeft: 10
  },
  textInputBlock: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  textInput: {
    borderColor: "#75430D",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: "MontserratMedium",
    color: "#fff",
  },
  textInputActive: {

    borderColor: "#FF6B01",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: "MontserratMedium",
    backgroundColor: "#E5E5E50f",
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    position: "absolute",
    bottom: 20,
  },

  buttonCancel: {
    backgroundColor: "#E5E5E511",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
    zIndex: 2,
  },
  buttonContinue: {
    backgroundColor: "#FF6B01",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
    zIndex: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Monstserrat",
  },
  countryModal: {
    position: "absolute",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#060606",
    width: "100%",
    paddingTop: "10%",
  },
  closeIcon: {
    marginLeft: 10,
    alignSelf: "flex-start",
  },
  searchInput: {
    width: "95%",
    borderColor: "#75430D",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: "MontserratMedium",
    color: "#fff",
    alignSelf: "center",
    marginVertical: 15,
  },
  countryList: {
    width: "100%",
  },
  countryItem: {
    marginBottom: 10,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#5757578a",
    borderRadius: 10
  },
  countryCode: {
    width: "20%",
    textAlign: "right",
    paddingRight: 10,
    color: "#fff",
    fontFamily: "MontserratMedium",
  },
});