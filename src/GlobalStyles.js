import { StatusBar, StyleSheet } from "react-native";

const colorScheme = {
  background: "#FFFFFF",
  textBlack: "#6E6E6E",
  textGray: "#D6D6D6",
  accent: "#17BC58",
};

const globalStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colorScheme.background.light,
  },
  headerContainer: {
    height: "8%",
    borderWidth: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "300",
    color: colorScheme.textBlack,
  },
  bodyHeadingText: {
    fontSize: 24,
    fontWeight: "400",
    color: colorScheme.textBlack,
  },
  bodySubheadingText: {
    color: colorScheme.textBlack,
  },
  bodyTextBlack: {
    color: colorScheme.textBlack,
  },
  bodyTextGray: {
    color: colorScheme.textGray,
  },
});

export default globalStyles;
export { colorScheme };
