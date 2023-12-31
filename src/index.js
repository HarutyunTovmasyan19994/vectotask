import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import App from './App';
import {Storage, store} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={false} persistor={Storage}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>
);
