import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ItemScreen from "../screens/ItemScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen
        name="Item"
        component={ItemScreen}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const screenOptions = {
  headerShown: false,
};
