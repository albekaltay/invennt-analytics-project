import store from "../redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import "../../public/assets/vendor/fontawesome-6.2.1/css/all.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
