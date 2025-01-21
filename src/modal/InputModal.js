import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import InputBar from "../components/InputBar";
import AntDesign from "@expo/vector-icons/AntDesign";

const InputModal = ({ visible, setVisible, inputValue, setInputValue }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <AntDesign name="close" size={22} color={"#6E6E6E"} />
            </Pressable>
          </View>
          <Text style={styles.title}>Enter Coupon Below</Text>
          <View style={{ height: 30 }} />
          <InputBar
            label={"Coupon code"}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onPress={() => setVisible(false)}
            icon={<AntDesign name="arrowright" color={"#17BC58"} size={25} />}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "80%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#C6C6C6",
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  selectedCategory: {
    backgroundColor: "#17BC58",
  },
});

export default InputModal;
