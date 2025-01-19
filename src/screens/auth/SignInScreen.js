import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
  Keyboard,
  Pressable,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import InputBar from "../../components/InputBar";
import SubmitButton from "../../components/SubmitButton";

import { signIn } from "../../services/auth/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { setAuthError } from "../../redux/features/auth/AuthSlice";
import Loading from "../../components/Loading";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
      dispatch(setAuthError(null));
    }
  }, [error]);

  const handleSignIn = () => {
    dispatch(signIn(email, password));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Image
            source={require("../../../assets/urban_cart.png")}
            style={styles.logo}
          />
        </View>
        <View style={{ height: 20 }} />

        <InputBar
          label={"Email"}
          icon={<Octicons name="person" color={"#6E6E6E"} size={25} />}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          inputValue={email}
          setInputValue={setEmail}
        />
        <View style={{ height: 10 }} />
        <InputBar
          label={"Password"}
          icon={<Octicons name="lock" color={"#6E6E6E"} size={25} />}
          inputValue={password}
          setInputValue={setPassword}
          isPassword={true}
          textContentType="password"
        />
        <View style={styles.optionsContainer}>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.optionsText}>Sign up</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.optionsText}>Forgot password</Text>
          </Pressable>
        </View>
        <View style={{ height: 10 }} />
        <SubmitButton
          label={loading ? "" : "LOGIN"}
          width={"50%"}
          height={65}
          onPress={() => {
            handleSignIn();
            Keyboard.dismiss();
          }}
        />
      </ScrollView>
      <Loading loading={loading} />
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 30,
    //borderWidth: 1,
  },
  optionsText: {
    fontSize: 18,
    color: "#17BC58",
    padding: 10,
  },
  textInput: {
    width: "80%",
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#20272F",
    padding: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    width: "50%",
    backgroundColor: "#20272F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  text: {
    fontSize: 20,
    color: "#20272F",
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    paddingHorizontal: 10,
  },
});
