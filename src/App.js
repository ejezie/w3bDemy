import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "routes/routeConfig";
import { Provider } from "react-redux";
import { store } from "redux/store";
// import store

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
