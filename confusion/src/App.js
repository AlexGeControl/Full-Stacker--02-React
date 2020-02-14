import React, {Component} from 'react';

import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

import './App.css';

const store = configureStore();

/*
  App: functional component
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
