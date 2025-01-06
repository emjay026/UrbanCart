import IconButton from "./IconButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colorScheme } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      icon={<AntDesign name="left" size={24} color={colorScheme.primary} />}
      onPress={() => navigation.goBack()} //navigation prop will not work here
    />
  );
};

export default BackButton;
