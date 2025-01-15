import AsyncStorage from "@react-native-async-storage/async-storage";

const SESSION_KEY = "supabase_session";

// Save the session to AsyncStorage
export const saveSession = async (session) => {
  try {
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch (error) {
    console.error("Failed to save session:", error);
  }
};

// Load the session from AsyncStorage
export const loadSession = async () => {
  try {
    const sessionString = await AsyncStorage.getItem(SESSION_KEY);
    return sessionString ? JSON.parse(sessionString) : null;
  } catch (error) {
    console.error("Failed to load session:", error);
    return null;
  }
};

// Remove the session from AsyncStorage
export const clearSession = async () => {
  try {
    await AsyncStorage.removeItem(SESSION_KEY);
  } catch (error) {
    console.error("Failed to clear session:", error);
  }
};
