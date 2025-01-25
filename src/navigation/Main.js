import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ItemScreen from "../screens/ItemScreen";
import CartScreen from "../screens/CartScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { restoreSession } from "../services/auth/AuthService";
import { StripeProvider } from "@stripe/stripe-react-native";
import OrderScreen from "../screens/OrderScreen";

const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);
  const { user } = useSelector((state) => state.auth);
  return (
    <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLIC_KEY}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen name="MainTabs" component={TabNavigator} />
              <Stack.Screen name="Item" component={ItemScreen} />
              <Stack.Screen name="Cart" component={CartScreen} />
              <Stack.Screen name="Order" component={OrderScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
};

export default Main;
