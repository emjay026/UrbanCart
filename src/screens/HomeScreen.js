import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import globalStyles, { colorScheme } from "../GlobalStyles";
import IconButton from "../components/IconButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <View style={styles.container}>
        <View style={globalStyles.headerContainer}>
          <IconButton
            child={
              <AntDesign name="left" size={25} color={colorScheme.textBlack} />
            }
          />
        </View>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
