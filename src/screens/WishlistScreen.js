import { StyleSheet, Text, View } from "react-native";

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WishlistScreen</Text>
    </View>
  );
};

export default WishlistScreen;

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
