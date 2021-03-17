import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { myStore } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
