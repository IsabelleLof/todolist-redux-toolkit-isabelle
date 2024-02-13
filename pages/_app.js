import { Provider } from "react-redux";
import store from "../store.js"; // Adjust the path according to your file structure

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
