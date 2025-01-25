import { Button, Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../services/auth/AuthService";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";
import ImagePickerBox from "../components/ImagePickerBox";
import SubmitButton from "../components/SubmitButton";
import OptionsCard from "../components/OptionsCard";

const ProfileScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user.email);
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={[styles.bodyContainer, { marginTop: insets.top }]}>
        <View style={styles.profileSection}>
          <ImagePickerBox />
          <View style={{ height: 20 }} />
          <Text style={styles.usernameText}>{user.email}</Text>
        </View>
        <View style={styles.bodySection}>
          <OptionsCard
            label="Orders"
            onPress={() => navigation.navigate("Order")}
          />
          <View style={{ flex: 1 }} />
          <OptionsCard
            label="Logout"
            textColor={"red"}
            centeredLabel={true}
            onPress={() => dispatch(signOut())}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#EFF1F1",
    padding: 20,
  },
  bodySection: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    borderWidth: 1,
  },
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#e1e1e1",
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "500",
  },
  footerSection: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
