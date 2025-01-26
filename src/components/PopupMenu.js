// filepath: /Users/mojalefa/Desktop/ReactNative/UrbanCart/src/components/PopupMenu.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import IconButton from "./IconButton";
import { useDispatch } from "react-redux";
import { signOut } from "../services/auth/AuthService";

const PopupMenu = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <Menu opened={visible} onBackdropPress={() => setVisible(false)}>
      <MenuTrigger>
        <IconButton
          icon={
            <Entypo
              name={"dots-three-horizontal"}
              size={25}
              color={"#6E6E6E"}
            />
          }
          onPress={() => setVisible(!visible)}
        />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            padding: 2,
            borderRadius: 10,
            marginTop: 30,
            marginLeft: -20,
            width: "60%",
          },
        }}
      >
        <MenuOption
          onSelect={() => {
            navigation.navigate("MainTabs", { screen: "Home" });
            setVisible(false);
          }}
          customStyles={{
            optionWrapper: styles.optionStyle,
          }}
        >
          <Text style={styles.optionText}>Home</Text>
          <Octicons name="home" color={"#6E6E6E"} size={20} />
        </MenuOption>
        <MenuOption
          onSelect={() => {
            dispatch(signOut());
            setVisible(false);
          }}
          customStyles={{
            optionWrapper: styles.optionStyle,
          }}
        >
          <Text style={styles.optionText}>Logout</Text>
          <Octicons name="sign-out" color={"#6E6E6E"} size={20} />
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    flexDirection: "column",
    borderWidth: 1,
  },
  optionStyle: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    color: "#6E6E6E",
  },
});

export default PopupMenu;
