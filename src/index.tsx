import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import rootReducer from "./store";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootRoutes from "./Components/routes/RootRoutes";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={ruRU}>
        <RootRoutes />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
