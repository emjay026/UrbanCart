import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../services/auth/AuthService";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";
import ImagePickerBox from "../components/ImagePickerBox";
import SubmitButton from "../components/SubmitButton";

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
        <View style={styles.bodySection}></View>
        <View style={styles.footerSection}>
          <SubmitButton
            label="Sign Out"
            width={150}
            height={50}
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
    backgroundColor: "white",
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "500",
  },
  bodySection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerSection: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
