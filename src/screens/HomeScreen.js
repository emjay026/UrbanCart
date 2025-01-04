import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import globalStyles, { colorScheme } from "../GlobalStyles";
import BackButton from "../components/BackButton";
import IconButton from "../components/IconButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <View style={styles.container}>
        <View style={globalStyles.headerContainer}>
          <View>
            <Text style={globalStyles.titleText}>Discover</Text>
          </View>
          <IconButton
            child={
              <MaterialCommunityIcons
                name="cart-outline"
                size={28}
                color={colorScheme.textBlack}
              />
            }
            onPress={() => {
              navigation.navigate("Cart");
            }}
          />
        </View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
          title="Go to Item"
          onPress={() => navigation.navigate("Item")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
