import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.adsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Clearance Sales</Text>
          </View>
          <View style={styles.ctaContainer}>
            <View style={styles.ctaWrapper}>
              <Text style={styles.ctaText}>Up to 50% Off </Text>
            </View>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/dummyDataImages/24-SamsungGalaxyZFold4.png")}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  bannerContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#17BC58",
    borderRadius: 20,
  },
  adsContainer: {
    flex: 1,
    padding: 20,
  },
  imgContainer: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleContainer: {
    height: "65%",
  },
  ctaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
  },
  ctaWrapper: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  ctaText: {
    width: "100%",
    fontSize: 14,
    color: "#17BC58",
  },
});
