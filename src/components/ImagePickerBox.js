import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../lib/supabase";

const ImagePickerBox = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType].All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }

    // if (!result.canceled) {
    //   const { uri } = result.assets[0];
    //   const fileName = uri.split("/").pop();
    //   const fileType = uri.split(".").pop();

    //   const response = await fetch(uri);
    //   const blob = await response.blob();

    //   const { data, error } = await supabase.storage
    //     .from("profile-images")
    //     .upload(`public/${fileName}`, blob, {
    //       contentType: `image/${fileType}`,
    //     });

    //   if (error) {
    //     console.error("Error uploading image:", error);
    //   } else {
    //     const { publicURL } = supabase.storage
    //       .from("profile-images")
    //       .getPublicUrl(`public/${fileName}`);

    //     setImage(publicURL);
    //   }
    // }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={pickImage}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Image
              source={require("../../assets/profile_default.png")}
              style={styles.image}
              resizeMode="contain"
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 100, // Make the container circular
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e1e1e1",
  },
  image: {
    width: 130,
    height: 130,
  },
});

export default ImagePickerBox;
