import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { signOut } from "../services/auth/AuthService";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(signOut());
        }}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
