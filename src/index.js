import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./app/store/store";
import './app/scss/index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      < App / >
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
