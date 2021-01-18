import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from "./reducers/rootReducers";
import Header from './components/Header';
import Navigation from './components/Navigation';
import MoviesList from './components/MoviesList';
import Details from "./containers/details";
import {createStore} from "redux";
import './style.css';

export const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header store={store}/>
        <Navigation/>

        <MoviesList store={store}/>
        <Details store={store}/>
      </Provider>

    </div>
  );
}

export default App;
