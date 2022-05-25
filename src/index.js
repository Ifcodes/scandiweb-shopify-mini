import React from "react";
import ReactDOM  from "react-dom";
import { ThemeProvider } from "styled-components";
import AppTheme  from "./styles/AppTheme";
import App from "./app";
import GlobalStyles from "./styles/GlobalStyle";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./store/Reducers";

const store = createStore(rootReducer)

const renderApp = () => {
  ReactDOM.render(

    <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider theme={AppTheme}>
        <Provider store={store}>
          <Router>
              <App />
          </Router>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>, 
      document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)