import React from 'react';
import './App.css';
import store from './Redux/Store/Index';
import { Provider } from "react-redux";
import { addArticle } from './Redux/Actions';

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
