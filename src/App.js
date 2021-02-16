import React from 'react';
import './App.css';
import store from './Store/Index';
import { Provider } from "react-redux";

// Container holds router and switch all components should be child
import Container from './Container/Container'

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Container />
        </div>
      </Provider>
  );
}

export default App;
