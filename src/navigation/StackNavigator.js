import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ItemScreen from "../screens/ItemScreen";
import { Header } from "react-native/Libraries/NewAppScreen";
import { ScreenStackHeaderLeftView } from "react-native-screens";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const screenOptions = {
  headerShown: false,
};
