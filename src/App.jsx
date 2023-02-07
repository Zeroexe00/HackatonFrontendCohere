import { Provider } from "react-redux";
import Inputs from "./components/inputs";
import Answers from "./components/answers";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { store, persistor } from "./store";
import CohereResponseContextProvider from "./context/cohereResponseContext";
import "./App.css";

export default function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <div className="App">
          <CohereResponseContextProvider>
            <Inputs />
            <Answers />
          </CohereResponseContextProvider>
        </div>
      </Provider>
    </PersistGate>
  );
}
