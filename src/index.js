import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./router";
import store from "./redux/redux";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </React.StrictMode>
);