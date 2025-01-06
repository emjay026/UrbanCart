import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/SearchScreen";
import FavScreen from "../screens/FavScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Octicons from "@expo/vector-icons/Octicons";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#17BC58",
  tabBarInactiveTintColor: "#6E6E6E",
  tabBarStyle: {
    backgroundColor: "#fff",
  },
};
