import { Provider } from "react-redux";

import { MainApp } from "./src";
import { store } from "#app/store";
import useCachedResources from "#hooks/useCachedResources";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
