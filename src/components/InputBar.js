import { Keyboard, Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";

const InputBar = ({
  label,
  icon,
  keyboardType = "default",
  autoComplete = "off",
  textContentType = "none",
  isPassword = false,
  inputValue,
  setInputValue,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={label}
          style={styles.input}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete={autoComplete}
          textContentType={textContentType}
          returnKeyType={"done"}
          secureTextEntry={isPassword}
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
        />

        {onPress ? (
          <Pressable
            onPress={() => {
              onPress();
              Keyboard.dismiss();
            }}
          >
            <View style={styles.iconContainer}>{icon}</View>
          </Pressable>
        ) : (
          <View style={styles.iconContainer}>{icon}</View>
        )}
      </View>
    </View>
  );
};

export default InputBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "#EFF1F1",
    borderWidth: 1,
    borderColor: "#EFF1F1",
  },
  iconContainer: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    paddingHorizontal: 20,
  },
});
