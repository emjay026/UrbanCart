import IconButton from "./IconButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colorScheme } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      child={<AntDesign name="left" size={25} color={colorScheme.textBlack} />}
      onPress={() => navigation.goBack()} //navigation prop will not work here
    />
  );
};

export default BackButton;
