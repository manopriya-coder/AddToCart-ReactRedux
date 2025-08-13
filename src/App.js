import { Provider } from "react-redux";
import "./App.css";
import Router from "./routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Redux/Store"

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
