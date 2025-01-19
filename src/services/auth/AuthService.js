import { supabase } from "../../lib/supabase";
import {
  setUser,
  clearUser,
  setAuthLoading,
  setAuthError,
} from "../../redux/features/auth/AuthSlice";
import {
  saveSession,
  clearSession,
  loadSession,
} from "../storage/AsyncStorage";

export const signUp = (email, password) => async (dispatch) => {
  try {
    console.log("signUp");
    dispatch(setAuthLoading(true));
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    dispatch(setUser({ user: data.user, session: data.session }));
  } catch (error) {
    dispatch(setAuthError(error.message));
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    console.log("signIn");
    dispatch(setAuthLoading(true));
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    dispatch(setUser({ user: data.user, session: data.session }));
    await saveSession(data.session); // Save session to AsyncStorage
  } catch (error) {
    dispatch(setAuthError(error.message));
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const signOut = () => async (dispatch) => {
  try {
    console.log("signOut");
    dispatch(setAuthLoading(true));
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    dispatch(clearUser());
    await clearSession();
  } catch (error) {
    dispatch(setAuthError(error.message));
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const restoreSession = () => async (dispatch) => {
  console.log("restoreSession");
  try {
    dispatch(setAuthLoading(true));
    const savedSession = await loadSession();

    if (savedSession) {
      const { data, error } = await supabase.auth.getUser(
        savedSession.access_token
      );
      if (error || !data.user) {
        dispatch(clearUser());
        await clearSession(); // Session is invalid
      } else {
        dispatch(setUser({ user: data.user, session: savedSession }));
      }
    }
  } catch (error) {
    dispatch(setAuthError(error.message));
  } finally {
    dispatch(setAuthLoading(false));
  }
};
