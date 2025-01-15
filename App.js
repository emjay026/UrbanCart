import { useEffect } from "react";
import Main from "./src/navigation/Main";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
